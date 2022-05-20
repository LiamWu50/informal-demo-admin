import ThreeSceneConstructorHelper from './helper/three-scene-constructor-helper'
import ThreeCityBuildsHelper from './helper/three-city-builds-helper'

export function useThreeJs() {
  const variable = reactive({
    threeJsViewer: null
  })

  const initThreeJsViewer = () => {
    variable.threeJsViewer = ThreeSceneConstructorHelper.initThreeViewer()
  }

  const loadCityBuilds = (dataSource) => {
    ThreeCityBuildsHelper.loadCityBuilds(dataSource)
  }

  return {
    variable,
    initThreeJsViewer,
    loadCityBuilds
  }
}
