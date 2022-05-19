import styles from './index.module.scss'
import Logo from '../logo'
import Search from '../search'
import Theme from '../theme'
import FullScreen from '../full-screen'
import User from '../user'

const Navbar = defineComponent({
  name: 'Navbar',
  props: {
    userDropdownOptions: {
      type: Array,
      default: () => []
    }
  },
  setup() {},
  render() {
    return (
      <div class={styles.container}>
        <Logo />
        <div class={styles.setting}>
          <Search />
          <Theme />
          <FullScreen />
          <User userDropdownOptions={this.userDropdownOptions} />
        </div>
      </div>
    )
  }
})

export default Navbar
