import styles from './index.module.scss'

const Theme = defineComponent({
  name: 'Theme',
  setup() {},
  render() {
    return (
      <a-tooltip content='主题'>
        <a-button class={styles['theme-btn']} type='outline' shape='circle'>
          {{
            icon: () => <icon-moon-fill />
          }}
        </a-button>
      </a-tooltip>
    )
  }
})

export default Theme
