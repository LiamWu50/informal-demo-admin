import * as THREE from 'three'
import ThreeSceneConstructorHelper from './helper/three-scene-constructor-helper'
import ThreeCityBuildsHelper from './helper/three-city-builds-helper'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export interface IThreeJsViewer {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  light: THREE.AmbientLight
  controls: OrbitControls
}

export function useThreeJs() {
  const threeJsVariable = reactive<any>({
    threeJsViewer: {},
    threeCityBuildsHelper: {}
  })

  const initThreeJsViewer = () => {
    const viewer = ThreeSceneConstructorHelper.initThreeViewer()
    threeJsVariable.threeCityBuildsHelper = new ThreeCityBuildsHelper(viewer)
    threeJsVariable.threeJsViewer = viewer
  }

  const loadCityBuilds = (dataSource: object) => {
    threeJsVariable.threeCityBuildsHelper.loadCityBuilds(dataSource)
  }

  return {
    threeJsVariable,
    initThreeJsViewer,
    loadCityBuilds
  }
}
