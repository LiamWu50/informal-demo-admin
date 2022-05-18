import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'
import { Button, Tooltip } from '@arco-design/web-vue'
import { IconLanguage } from '@arco-design/web-vue/es/icon'

const Language = defineComponent({
  name: 'Language',
  setup() {},
  render() {
    return (
      <Tooltip content='语言'>
        <Button class={styles['language-btn']} type='outline' shape='circle'>
          {{
            icon: () => <IconLanguage />
          }}
        </Button>
      </Tooltip>
    )
  }
})

export default Language
