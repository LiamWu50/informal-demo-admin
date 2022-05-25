import { useThreeJs } from './use-threejs'
import styles from './index.module.scss'
import cityGeojson from '@/assets/json/city-polygon-chengdu.json'

const ThreeJs = defineComponent({
  name: 'ThreeJs',
  setup() {
    onMounted(() => {
      const { threeJsVariable, initThreeJsViewer, loadCityBuilds } =
        useThreeJs()

      threeJsVariable.threeJsViewer = initThreeJsViewer()

      //开始加载城市建筑群
      loadCityBuilds(cityGeojson)
    })
  },
  render() {
    return <div id='container' class={styles.container}></div>
  }
})

export default ThreeJs
