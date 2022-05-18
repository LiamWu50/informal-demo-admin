import styles from './index.module.scss'
import { useMenuTree } from './use-menu-tree'
import { compile } from 'vue'

const Sidebar = defineComponent({
  name: 'Sidebar',
  setup() {
    const { menuTree, menuVariable, collapsed, handleSetCollapse, goto } =
      useMenuTree()

    const compileIcon = (icon) => (icon ? () => h(compile(`<${icon}/>`)) : null)

    const renderSubMenu = () => {
      const travel = (route) => {
        if (!route) return []
        return route.map((element) =>
          element?.children && element?.children.length !== 0 ? (
            <a-sub-menu key={element?.name}>
              {{
                default: () => travel(element?.children),
                title: () => <span>{element?.meta?.title || ''}</span>,
                icon: compileIcon(element?.meta?.icon)
              }}
            </a-sub-menu>
          ) : (
            <a-menu-item key={element?.name} onClick={() => goto(element)}>
              {{
                default: () => <span>{element?.meta?.title || ''}</span>,
                icon: compileIcon(element?.meta?.icon)
              }}
            </a-menu-item>
          )
        )
      }
      return travel(menuTree.value)
    }

    return {
      collapsed,
      handleSetCollapse,
      renderSubMenu,
      ...toRefs(menuVariable)
    }
  },
  render() {
    return (
      <div class={styles['menu-wrapper']}>
        <a-menu
          v-model:collapsed={this.collapsed}
          show-collapse-button={true}
          auto-open={false}
          selected-keys={this.selectedKey}
          auto-open-selected={true}
          level-indent={34}
          style='height: 100%;'
          onCollapse={this.handleSetCollapse}
        >
          {this.renderSubMenu()}
        </a-menu>
      </div>
    )
  }
})

export default Sidebar
