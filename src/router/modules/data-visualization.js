import utils from '@/utils'

const modules = import.meta.glob('/src/views/**/**.jsx')
const components = utils.mapping(modules)

export default {
  path: '/',
  name: 'dataVisualization',
  redirect: { name: 'l7' },
  meta: {
    title: '数据可视化',
    requiresAuth: true,
    icon: 'icon-bar-chart',
    order: 2
  },
  component: () => import('@/layouts/content'),
  children: [
    {
      path: '/data-visualization/cesium',
      name: 'cesium',
      component: components['data-visualization-cesium'],
      meta: {
        title: 'Cesium',
        activeMenu: 'cesium',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    },
    {
      path: '/data-visualization/echarts',
      name: 'echarts',
      component: components['data-visualization-echarts'],
      meta: {
        title: 'Echarts',
        activeMenu: 'echarts',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    },
    {
      path: '/data-visualization/l7',
      name: 'l7',
      component: components['data-visualization-l7'],
      meta: {
        title: 'L7',
        activeMenu: 'l7',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    },
    {
      path: '/data-visualization/map-box',
      name: 'map-box',
      component: components['data-visualization-map-box'],
      meta: {
        title: 'MapBox',
        activeMenu: 'mapbox',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    },
    {
      path: '/data-visualization/three-js',
      name: 'three-js',
      component: components['data-visualization-three-js'],
      meta: {
        title: 'ThreeJs',
        activeMenu: 'threejs',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    }
  ]
}
