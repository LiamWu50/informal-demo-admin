import styles from './index.module.scss'

const Language = defineComponent({
  name: 'Language',
  setup() {},
  render() {
    return (
      <a-tooltip content='语言'>
        <a-button class={styles['language-btn']} type='outline' shape='circle'>
          {{
            icon: () => <icon-language />
          }}
        </a-button>
      </a-tooltip>
    )
  }
})

export default Language
