import type { RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'

import utils from '@/utils'
import dashboard from './modules/dashboard'
import dataVisualization from './modules/data-visualization'

// All TSX files under the views folder automatically generate mapping relationship
const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

/**
 * Basic page
 */
const basePage: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: { name: 'home' },
  //   meta: { title: '首页' },
  //   component: () => import('@/layouts/content'),
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: components['home'],
  //       meta: {
  //         title: '首页',
  //         activeMenu: 'home',
  //         auth: []
  //       }
  //     },
  //     {
  //       path: '/password',
  //       name: 'password',
  //       component: components['password'],
  //       meta: {
  //         title: '修改密码',
  //         auth: []
  //       }
  //     },
  //     {
  //       path: '/profile',
  //       name: 'profile',
  //       component: components['profile'],
  //       meta: {
  //         title: '用户信息',
  //         auth: []
  //       }
  //     }
  //   ]
  // },
  dashboard,
  dataVisualization
]

/**
 * Login page
 */
const loginPage: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: components['login'],
    meta: {
      auth: []
    }
  }
]

const routes: RouteRecordRaw[] = [...basePage, ...loginPage]

// 重新组织后导出
export default routes
