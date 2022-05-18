import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'
import Logo from '../logo'
import Search from '../search'
import Language from '../language'
import Theme from '../theme'
import User from '../user'

const Navbar = defineComponent({
  name: 'Navbar',
  setup() {},
  render() {
    return (
      <div class={styles.container}>
        <Logo />
        <div class={styles.setting}>
          <Search />
          <Language />
          <Theme />
          <User />
        </div>
      </div>
    )
  }
})

export default Navbar
