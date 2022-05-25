export function userDropdown() {
  const router = useRouter()

  const handelSelect = (key) => {
    if (key === '切换权限') {
      console.log('切换权限')
    } else if (key === '用户中心') {
      console.log('用户中心')
    } else if (key === '用户设置') {
      router.push({ name: 'monitor' })
    } else if (key === '退出登录') {
      handleLogout()
    }
  }

  const handleLogout = () => {
    console.log('退出登录')
  }

  return {
    handelSelect
  }
}
