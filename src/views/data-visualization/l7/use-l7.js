import { Scene, PolygonLayer } from '@antv/l7'
import { GaodeMap } from '@antv/l7-maps'

export function useL7() {
  const variable = reactive({
    l7Scene: null
  })

  const initL7Scene = (container) => {
    variable.l7Scene = new Scene({
      id: container,
      map: new GaodeMap({
        pitch: 0,
        style: 'dark',
        center: [114.050008, 22.529272],
        zoom: 14.1
      })
    })
  }

  const loadPolygonLayer = (dataSource) => {
    const layer = new PolygonLayer({})
      .source(dataSource)
      .shape('extrude')
      .size('h20', [100, 120, 160, 200, 260, 500])
      .color('h20', [
        '#816CAD',
        '#A67FB5',
        '#C997C7',
        '#DEB8D4',
        '#F5D4E6',
        '#FAE4F1',
        '#FFF3FC'
      ])
      .style({
        opacity: 1.0
      })
    variable.l7Scene.addLayer(layer)
  }

  return {
    variable,
    initL7Scene,
    loadPolygonLayer
  }
}
