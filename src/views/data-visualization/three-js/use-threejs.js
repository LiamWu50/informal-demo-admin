import ThreeSceneConstructorHelper from './helper/three-scene-constructor-helper'
import ThreeCityBuildsHelper from './helper/three-city-builds-helper'

export function useThreeJs() {
  const threeJsVariable = reactive({
    threeJsViewer: null,
    threeCityBuildsHelper: null
  })

  const initThreeJsViewer = () => {
    const viewer = ThreeSceneConstructorHelper.initThreeViewer()
    threeJsVariable.threeCityBuildsHelper = new ThreeCityBuildsHelper(viewer)
    threeJsVariable.threeJsViewer = viewer
  }

  const loadCityBuilds = (dataSource) => {
    threeJsVariable.threeCityBuildsHelper.loadCityBuilds(dataSource)
  }

  return {
    threeJsVariable,
    initThreeJsViewer,
    loadCityBuilds
  }
}
