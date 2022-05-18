import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'
import { Button, Tooltip } from '@arco-design/web-vue'
import { IconMoonFill } from '@arco-design/web-vue/es/icon'

const Theme = defineComponent({
  name: 'Theme',
  setup() {},
  render() {
    return (
      <Tooltip content='主题'>
        <Button class={styles['theme-btn']} type='outline' shape='circle'>
          {{
            icon: () => <IconMoonFill />
          }}
        </Button>
      </Tooltip>
    )
  }
})

export default Theme
