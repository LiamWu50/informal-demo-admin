import * as THREE from 'three'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils'
import { floorColorCard } from '@/config/build-floor-config'
import { IThreeJsViewer } from '../use-threejs'

export default class ThreeCityBuildsHelper {
  private scene: THREE.Scene

  constructor(viewer: IThreeJsViewer) {
    this.scene = viewer.scene
  }

  /**
   * 加载城市建筑群
   * @param {GeoJson} dataSource
   */
  loadCityBuilds(dataSource: any) {
    const geometries = dataSource.features.map((feature: object) =>
      this.getGeometryByFeature(feature)
    )
    const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(
      geometries,
      true
    )
    const materials = dataSource.features.map(
      (feature: any) =>
        new THREE.MeshPhongMaterial({
          color: this.getColorByFloor(feature.properties.Floor)
        })
    )
    const mergedMesh = new THREE.Mesh(mergedGeometry, materials)
    mergedMesh.geometry.center()

    this.scene.add(mergedMesh)
  }

  /**
   * 通过要素组创建geometry
   * @param {Array} feature
   * @returns {THREE.ExtrudeBufferGeometry}
   */
  private getGeometryByFeature(feature: any): THREE.ExtrudeBufferGeometry {
    const floor = feature.properties.Floor
    const coordinate = feature.geometry.coordinates[0][0]

    const shapePath = coordinate.map(
      (c: number[]) => new THREE.Vector2(c[0] - 113.95, c[1] - 22.534)
    )
    const shape = new THREE.Shape(shapePath)
    const extrudeSettings = {
      depth: 0.0005 + 0.00005 * floor,
      bevelEnabled: false
    }
    return new THREE.ExtrudeBufferGeometry(shape, extrudeSettings)
  }

  /**
   * 通过楼层高度获取颜色
   * @param {Number} floor
   */
  private getColorByFloor(floor: number) {
    const int = String(floor / 5)
    const remainder: number = parseInt(int)
    return floorColorCard[remainder]
  }
}
