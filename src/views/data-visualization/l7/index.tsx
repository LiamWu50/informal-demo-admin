import { useL7 } from './use-l7'
import styles from './index.module.scss'
import cityPolygon from '@/assets/json/city-polygon-chengdu.json'

const L7 = defineComponent({
  name: 'L7',
  setup() {
    const { variable, initL7Scene, loadPolygonLayer } = useL7()

    onMounted(() => {
      initL7Scene('container')

      variable.l7Scene.on('loaded', () => {
        loadPolygonLayer(cityPolygon)
      })
    })
  },
  render() {
    return <div id='container' class={styles.container}></div>
  }
})

export default L7
