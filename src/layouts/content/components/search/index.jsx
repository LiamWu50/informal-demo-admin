import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'
import { Button, Tooltip } from '@arco-design/web-vue'
import { IconSearch } from '@arco-design/web-vue/es/icon'

const Search = defineComponent({
  name: 'Search',
  setup() {},
  render() {
    return (
      <Tooltip content='搜索'>
        <Button class={styles['search-btn']} type='outline' shape='circle'>
          {{
            icon: () => <IconSearch />
          }}
        </Button>
      </Tooltip>
    )
  }
})

export default Search
