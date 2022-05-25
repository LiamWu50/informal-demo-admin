import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Three场景构建工具
 */
export default new (class ThreeSceneConstructorHelper {
  private scene!: THREE.Scene
  private camera!: THREE.PerspectiveCamera 
  private renderer!: THREE.WebGLRenderer
  private light!: THREE.AmbientLight
  private controls!: OrbitControls

  constructor() {}

  /**
   * @description 初始化整个场景
   */
  initThreeViewer()  {
    this.initRenderer()
    this.initCamera()
    this.initScene()
    this.initControls()
    this.initLight()
    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)

    return {
      renderer: this.renderer,
      camera: this.camera,
      scene: this.scene,
      light: this.light,
      controls: this.controls
    }
  }

  /**
   * @description 初始化渲染场景
   */
  private initRenderer() {
    const containerDom = document.querySelector('#container') as HTMLDivElement
    const width = containerDom.clientWidth,
      height = containerDom.clientHeight
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(width, height)
    containerDom.appendChild(this.renderer.domElement)
  }

  /**
   * @description 初始化相机
   */
  private initCamera() {
    const containerDom = document.querySelector('#container') as HTMLDivElement
    const width = containerDom.clientWidth,
      height = containerDom.clientHeight
    this.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.000001,
      100000
    )
    this.camera.position.set(0.003664870746433735, 0.004847514908760786, 0.1)
    this.camera.lookAt(0, 0, 0)
  }

  /**
   * @description 初始化场景
   */
  private initScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x020924)
    this.scene.fog = new THREE.Fog(0x020924, 200, 1000)
  }

  /**
   * 初始化用户交互
   **/
  private initControls() {
    this.controls = new OrbitControls(this.camera as THREE.PerspectiveCamera, this.renderer.domElement as HTMLCanvasElement)
    this.controls.enableDamping = false
    this.controls.enableZoom = true
    this.controls.autoRotate = false
    this.controls.autoRotateSpeed = 2
    this.controls.enablePan = true
  }

  /**
   * @description 初始化光
   */
  private initLight() {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 1.1)
    this.scene.add(ambientLight)
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2)
    hemiLight.position.set(0, 1, 0)
    this.scene.add(hemiLight)
    let directionalLight3 = new THREE.DirectionalLight(0xffffff)
    directionalLight3.position.set(1, 500, -20)
    directionalLight3.castShadow = true
    directionalLight3.shadow.camera.top = 18
    directionalLight3.shadow.camera.bottom = -10
    directionalLight3.shadow.camera.left = -52
    directionalLight3.shadow.camera.right = 12
    this.scene.add(directionalLight3)
  }

  /**
   * 窗口变动
   **/
  private onWindowResize() {
    this.camera.aspect = innerWidth / innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(innerWidth, innerHeight)
    this.renders()
  }

  /**
   * @description 渲染
   */
  private renders() {
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }

  /**
   * 更新
   **/
  private animate() {
    window.requestAnimationFrame(() => {
      if (this.controls) this.controls.update()

      this.renders()
      this.animate()
    })
  }
})()
