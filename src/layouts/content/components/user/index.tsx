import { compile } from 'vue'
import styles from './index.module.scss'
import { userDropdown } from './use-dropdown'

const User = defineComponent({
  name: 'User',
  props: {
    userDropdownOptions: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { handelSelect } = userDropdown()

    return {
      handelSelect
    }
  },
  render() {
    return (
      <a-dropdown trigger='click' onSelect={this.handelSelect}>
        {{
          default: () => (
            <a-avatar size={32} class={styles.avatar}>
              <img
                alt='avatar'
                src='http://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png'
              />
            </a-avatar>
          ),
          content: () => (
            <>
              {this.userDropdownOptions.map((item) => (
                <a-doption>
                  <a-space>
                    {h(compile(`<${item.icon}/>`))}
                    <span>{item.label}</span>
                  </a-space>
                </a-doption>
              ))}
            </>
          )
        }}
      </a-dropdown>
    )
  }
})

export default User
