import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { floorColorCard } from '@/config/build-floor-config'

export function useMapBox() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGlhbS13dSIsImEiOiJjbDNlNjN6MnEwMDFzM2JvZnRueXo0anR6In0.aMT4Tmek2smS9EZPfkMMUA'

  const variable = reactive<any>({
    mapBoxScene: null
  })

  const initMapBoxScene = (container: string | HTMLDivElement) => {
    variable.mapBoxScene = new mapboxgl.Map({
      style: 'mapbox://styles/zcxduo/ck241p6413s0b1cpayzldv7x7',
      // style: 'mapbox://styles/mapbox/navigation-guidance-night-v2',
      center: [104.104946, 30.622684],
      zoom: 13,
      pitch: 45,
      bearing: -17.6,
      container: container
    })
  }

  const rotateCamera = (timestamp: number) => {
    variable.mapBoxScene.rotateTo((timestamp / 100) % 360, { duration: 0 })
    requestAnimationFrame(rotateCamera)
  }

  const loadPolygonLayer = (dataSource: object) => {
    variable.mapBoxScene.addLayer({
      id: 'room-extrusion',
      type: 'fill-extrusion',
      source: {
        type: 'geojson',
        data: dataSource
      },
      minzoom: 0,
      maxzoom: 24,
      paint: {
        'fill-extrusion-color': [
          'case',
          ['<', ['get', 'Floor'], 5],
          floorColorCard[0],
          ['<', ['get', 'Floor'], 10],
          floorColorCard[1],
          ['<', ['get', 'Floor'], 15],
          floorColorCard[2],
          ['<', ['get', 'Floor'], 20],
          floorColorCard[3],
          ['<', ['get', 'Floor'], 25],
          floorColorCard[4],
          ['<', ['get', 'Floor'], 30],
          floorColorCard[5],
          ['<', ['get', 'Floor'], 35],
          floorColorCard[6],
          ['<', ['get', 'Floor'], 40],
          floorColorCard[7],
          ['<', ['get', 'Floor'], 45],
          floorColorCard[8],
          ['<', ['get', 'Floor'], 50],
          floorColorCard[9],
          ['<', ['get', 'Floor'], 55],
          floorColorCard[10],
          floorColorCard[11]
        ],
        'fill-extrusion-height': 100,
        'fill-extrusion-opacity': 1
      }
    })
  }

  return {
    variable,
    initMapBoxScene,
    rotateCamera,
    loadPolygonLayer
  }
}
