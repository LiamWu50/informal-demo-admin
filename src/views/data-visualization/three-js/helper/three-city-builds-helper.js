import * as THREE from 'three'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils'
import { floorColorCard } from '@/config/build-floor-config'
export default class ThreeCityBuildsHelper {
  constructor(viewer) {
    this._scene = viewer.scene
  }

  get loadCityBuilds() {
    return this._loadCityBuilds
  }

  /**
   * 加载城市建筑群
   * @param {GeoJson} dataSource
   */
  _loadCityBuilds(dataSource) {
    const geometries = dataSource.features.map((feature) =>
      this._getGeometryByFeature(feature)
    )
    const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(
      geometries,
      true
    )
    const materials = dataSource.features.map(
      (feature) =>
        new THREE.MeshPhongMaterial({
          color: this._getColorByFloor(feature.properties.Floor)
        })
    )
    const mergedMesh = new THREE.Mesh(mergedGeometry, materials)
    mergedMesh.geometry.center()

    this._scene.add(mergedMesh)
  }

  /**
   * 通过要素组创建geometry
   * @param {Array} feature
   * @returns {THREE.ExtrudeBufferGeometry}
   */
  _getGeometryByFeature(feature) {
    const floor = feature.properties.Floor
    const coordinate = feature.geometry.coordinates[0][0]

    const shapePath = coordinate.map(
      (c) => new THREE.Vector2(c[0] - 113.95, c[1] - 22.534)
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
  _getColorByFloor(floor) {
    const remainder = parseInt(floor / 5)
    return floorColorCard[remainder]
  }
}
