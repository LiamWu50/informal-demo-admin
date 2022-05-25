import styles from './index.module.scss'

const Logo = defineComponent({
  name: 'Logo',
  render() {
    return (
      <div class={styles.logo}>
        <img
          alt='logo'
          src='http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image'
        />
        <a-typography-title style={{ margin: 0, fontSize: '18px' }} heading={5}>
          Arco Pro
        </a-typography-title>
      </div>
    )
  }
})

export default Logo
