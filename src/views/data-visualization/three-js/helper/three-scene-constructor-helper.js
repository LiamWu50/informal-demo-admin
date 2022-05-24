import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Three场景构建工具
 */
export default new (class ThreeSceneConstructorHelper {
  constructor() {
    this._renderer = null
    this._camera = null
    this._scene = null
    this._light = null
    this._controls = null
  }

  get initThreeViewer() {
    return this._initThreeViewer
  }

  /**
   * @description 初始化整个场景
   */
  _initThreeViewer() {
    this._initRenderer()
    this._initCamera()
    this._initScene()
    this._initControls()
    this._initLight()
    this._animate()

    window.addEventListener('resize', this._onWindowResize.bind(this), false)

    return {
      renderer: this._renderer,
      camera: this._camera,
      scene: this._scene,
      light: this._light,
      controls: this._controls
    }
  }

  /**
   * @description 初始化渲染场景
   */
  _initRenderer() {
    const containerDom = document.querySelector('#container')
    const width = containerDom.clientWidth,
      height = containerDom.clientHeight
    this._renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this._renderer.setPixelRatio(window.devicePixelRatio)
    this._renderer.setSize(width, height)
    containerDom.appendChild(this._renderer.domElement)
  }

  /**
   * @description 初始化相机
   */
  _initCamera() {
    const containerDom = document.querySelector('#container')
    const width = containerDom.clientWidth,
      height = containerDom.clientHeight
    this._camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.000001,
      100000
    )
    this._camera.position.set(0.003664870746433735, 0.004847514908760786, 0.1)
    this._camera.lookAt(0, 0, 0)
  }

  /**
   * @description 初始化场景
   */
  _initScene() {
    this._scene = new THREE.Scene()
    this._scene.background = new THREE.Color(0x020924)
    this._scene.fog = new THREE.Fog(0x020924, 200, 1000)
  }

  /**
   * 初始化用户交互
   **/
  _initControls() {
    this._controls = new OrbitControls(this._camera, this._renderer.domElement)
    this._controls.enableDamping = false
    this._controls.enableZoom = true
    this._controls.autoRotate = false
    this._controls.autoRotateSpeed = 2
    this._controls.enablePan = true
  }

  /**
   * @description 初始化光
   */
  _initLight() {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 1.1)
    this._scene.add(ambientLight)
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2)
    hemiLight.position.set(0, 1, 0)
    this._scene.add(hemiLight)
    let directionalLight3 = new THREE.DirectionalLight(0xffffff)
    directionalLight3.position.set(1, 500, -20)
    directionalLight3.castShadow = true
    directionalLight3.shadow.camera.top = 18
    directionalLight3.shadow.camera.bottom = -10
    directionalLight3.shadow.camera.left = -52
    directionalLight3.shadow.camera.right = 12
    this._scene.add(directionalLight3)
  }

  /**
   * 窗口变动
   **/
  _onWindowResize() {
    this._camera.aspect = innerWidth / innerHeight
    this._camera.updateProjectionMatrix()
    this._renderer.setSize(innerWidth, innerHeight)
    this._renders()
  }

  /**
   * @description 渲染
   */
  _renders() {
    this._renderer.clear()
    this._renderer.render(this._scene, this._camera)
  }

  /**
   * 更新
   **/
  _animate() {
    window.requestAnimationFrame(() => {
      if (this._controls) this._controls.update()

      this._renders()
      this._animate()
    })
  }
})()
