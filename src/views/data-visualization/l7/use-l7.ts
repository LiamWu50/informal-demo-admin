import { Scene, PolygonLayer } from '@antv/l7'
import { GaodeMap, Mapbox } from '@antv/l7-maps'

interface IVariable {
  l7Scene: any
}

export function useL7() {
  const variable: IVariable = reactive({
    l7Scene: undefined
  })

  const initL7Scene = (container: string | HTMLDivElement) => {
    variable.l7Scene = new Scene({
      id: container,
      map: new Mapbox({
        pitch: 0,
        style: 'dark',
        center: [104.104946, 30.622684],
        zoom: 14.1
      })
    })
  }

  const loadPolygonLayer = (dataSource: object) => {
    const layer = new PolygonLayer({})
      .source(dataSource)
      .shape('extrude')
      .size(160)
      .color('#816CAD')
      // .size('h20', [100, 120, 160, 200, 260, 500])
      // .color('h20', [
      //   '#816CAD',
      //   '#A67FB5',
      //   '#C997C7',
      //   '#DEB8D4',
      //   '#F5D4E6',
      //   '#FAE4F1',
      //   '#FFF3FC'
      // ])
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
