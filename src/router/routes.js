import utils from '@/utils'
import dashboard from './modules/dashboard'

// All TSX files under the views folder automatically generate mapping relationship
const modules = import.meta.glob('/src/views/**/**.jsx')
const components = utils.mapping(modules)

/**
 * Basic page
 */
const basePage = [
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
  dashboard
]

/**
 * Login page
 */
const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: components['login'],
    meta: {
      auth: []
    }
  }
]

const routes = [...basePage, ...loginPage]

// 重新组织后导出
export default routes
