import styles from './index.module.scss'

const Search = defineComponent({
  name: 'Search',
  setup() {},
  render() {
    return (
      <a-tooltip content='搜索'>
        <a-button class={styles['search-btn']} type='outline' shape='circle'>
          {{
            icon: () => <icon-search />
          }}
        </a-button>
      </a-tooltip>
    )
  }
})

export default Search
