import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useUserStore } from '@/store/user/user'

// NProgress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.MODE === 'production' ? '/dolphinscheduler/ui/' : '/'
  ),
  routes
})

/**
 * Routing to intercept
 */
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // const userStore = useUserStore()
  // const metaData = to.meta
  // if (
  //   metaData.auth?.includes('ADMIN_USER') &&
  //   userStore.getUserInfo.userType !== 'ADMIN_USER' &&
  //   metaData.activeMenu === 'security'
  // ) {
  //   to.fullPath = '/security/token-manage'
  //   next({ name: 'token-manage' })
  // } else {
  //   next()
  // }
  next()

  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
