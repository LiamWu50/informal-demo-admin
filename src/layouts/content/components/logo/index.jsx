import { defineComponent } from 'vue'
import styles from './index.module.scss'
import { TypographyTitle } from '@arco-design/web-vue'

const Logo = defineComponent({
  name: 'Logo',
  render() {
    return (
      <div class={styles.logo}>
        <img
          alt='logo'
          src='http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image'
        />
        <TypographyTitle style={{ margin: 0, fontSize: '18px' }} heading={5}>
          Arco Pro
        </TypographyTitle>
      </div>
    )
  }
})

export default Logo
