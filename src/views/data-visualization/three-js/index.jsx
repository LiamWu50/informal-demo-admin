import { useThreeJs } from './use-threejs'
import styles from './index.module.scss'

const ThreeJs = defineComponent({
  name: 'ThreeJs',
  setup() {
    onMounted(() => {
      const { variable, initThreeJsViewer, loadCityBuilds } = useThreeJs()

      variable.threeJsViewer = initThreeJsViewer()

      //开始加载城市建筑群
      loadCityBuilds()
    })
  },
  render() {
    return <div id='container' class={styles.container}></div>
  }
})

export default ThreeJs
