import styles from './index.module.scss'
import { useFullscreen } from '@vueuse/core'

const FullScreen = defineComponent({
  name: 'FullScreen',
  setup() {
    const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

    return {
      isFullscreen,
      toggleFullScreen
    }
  },
  render() {
    return (
      <a-tooltip content={this.isFullscreen ? '退出全屏' : '开启全屏'}>
        <a-button
          class={styles['full-screen__btn']}
          type='outline'
          shape='circle'
          onClick={this.toggleFullScreen}
        >
          {{
            icon: () =>
              this.isFullscreen ? <icon-fullscreen-exit /> : <icon-fullscreen />
          }}
        </a-button>
      </a-tooltip>
    )
  }
})

export default FullScreen
