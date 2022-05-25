import type { Component } from 'vue'
import utils from '@/utils'

const modules = import.meta.glob('/src/views/**/**.jsx')
const components: { [key: string]: Component } = utils.mapping(modules)

export default {
  path: '/dashboard',
  name: 'dashboard',
  redirect: { name: 'workplace' },
  meta: {
    title: '仪表盘',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 1
  },
  component: () => import('@/layouts/content'),
  children: [
    {
      path: '/dashboard/workplace',
      name: 'workplace',
      component: components['dashboard-workplace'],
      meta: {
        title: '工作空间',
        activeMenu: 'dashboard',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    },
    {
      path: '/dashboard/monitor',
      name: 'monitor',
      component: components['dashboard-monitor'],
      meta: {
        title: '实时监控',
        activeMenu: 'dashboard',
        showSide: true,
        requiresAuth: true,
        auth: []
      }
    }
  ]
}
