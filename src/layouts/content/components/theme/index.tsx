import styles from './index.module.scss'
import useThemeStore from '@/store/theme'

const Theme = defineComponent({
  name: 'Theme',
  setup() {
    const themeStore = useThemeStore()

    return {
      themeStore
    }
  },
  render() {
    return (
      <a-tooltip
        content={
          this.themeStore.getTheme ? '点击切换为亮色模式' : '点击切换为黑夜模式'
        }
      >
        <a-button
          class={styles['theme-btn']}
          type='outline'
          shape='circle'
          onClick={this.themeStore.setDarkTheme}
        >
          {{
            icon: () =>
              this.themeStore.getTheme ? <icon-moon-fill /> : <icon-sun-fill />
          }}
        </a-button>
      </a-tooltip>
    )
  }
})

export default Theme
