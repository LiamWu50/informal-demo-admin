import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'
import { Dropdown, Avatar, Space, Tooltip, Doption } from '@arco-design/web-vue'
import {
  IconUser,
  IconTag,
  IconExport,
  IconSettings
} from '@arco-design/web-vue/es/icon'

const User = defineComponent({
  name: 'User',
  setup() {
    const handleSwitchRoles = () => {
      alert('成功了')
    }
    const handleLogout = () => {}

    return {
      handleSwitchRoles,
      handleLogout
    }
  },
  render() {
    return (
      <Dropdown trigger='click'>
        {{
          default: () => (
            <Avatar size={32} class={styles.avatar}>
              <img
                alt='avatar'
                src='http://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png'
              />
            </Avatar>
          ),
          content: () => (
            <>
              <Doption>
                <Space onClick={this.handleSwitchRoles}>
                  <IconTag />
                  <span>切换权限</span>
                </Space>
              </Doption>
              <Doption>
                <Space onClick={this.$router.push({ name: 'monitor' })}>
                  <IconUser />
                  <span>用户中心</span>
                </Space>
              </Doption>
              <Doption>
                <Space onClick={this.$router.push({ name: 'monitor' })}>
                  <IconSettings />
                  <span>用户设置</span>
                </Space>
              </Doption>
              <Doption>
                <Space onClick={this.handleLogout}>
                  <IconExport />
                  <span>退出登录</span>
                </Space>
              </Doption>
            </>
          )
        }}
      </Dropdown>
    )
  }
})

export default User
