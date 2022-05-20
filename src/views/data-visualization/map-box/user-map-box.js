import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

export function useMapBox() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGlhbS13dSIsImEiOiJjbDNlNjN6MnEwMDFzM2JvZnRueXo0anR6In0.aMT4Tmek2smS9EZPfkMMUA'

  const variable = reactive({
    mapBoxScene: null
  })

  const initMapBoxScene = (container) => {
    variable.mapBoxScene = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/navigation-preview-night-v2',
      center: [114.050008, 22.529272],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: container
    })
  }

  const rotateCamera = (timestamp) => {
    variable.mapBoxScene.rotateTo((timestamp / 100) % 360, { duration: 0 })
    requestAnimationFrame(rotateCamera)
  }

  const loadPolygonLayer = (dataSource) => {
    variable.mapBoxScene.addLayer({
      id: 'room-extrusion',
      type: 'fill-extrusion',
      source: {
        type: 'geojson',
        data: dataSource
      },
      type: 'fill-extrusion',
      minzoom: 0,
      maxzoom: 24,
      paint: {
        'fill-extrusion-color': '#816CAD',
        'fill-extrusion-height': 100,
        'fill-extrusion-opacity': 0.8
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
