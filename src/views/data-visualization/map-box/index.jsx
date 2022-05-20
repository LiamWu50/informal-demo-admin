import { useMapBox } from './user-map-box'
import styles from './index.module.scss'
import cityPolygon from '@/assets/json/city-polygon.json'

const MapBox = defineComponent({
  name: 'MapBox',
  setup() {
    const { variable, initMapBoxScene, rotateCamera, loadPolygonLayer } =
      useMapBox()

    onMounted(() => {
      initMapBoxScene('container')

      variable.mapBoxScene.on('load', () => {
        // rotateCamera(0)
        loadPolygonLayer(cityPolygon)
      })
    })
  },
  render() {
    return <div id='container' class={styles.container}></div>
  }
})

export default MapBox
