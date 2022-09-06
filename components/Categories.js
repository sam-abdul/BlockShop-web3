import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVest,
  faTv,
  faCouch,
  faHeartbeat,
  faShoppingBasket,
  faBasketball,
} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/com.module.css'

export default function Categories() {
  return (
    <div className={styles.categories}>
     <div className={styles.line}>
     <Link href="/icon_body/">
        <a className={styles.icon_body}>
          <FontAwesomeIcon
            icon={faVest}
            className={styles.icon}
          />
          <p className={styles.icon_p}>fashion</p>
        </a>
      </Link>
      <Link href="/electronic">
        <a className={styles.icon_body}>
          <FontAwesomeIcon
            icon={faTv}
            className={styles.icon}
          />
          <p className={styles.icon_p}>Electronics</p>
        </a>
      </Link>
      <Link href="/body">
        <a className={styles.icon_body}>
          <FontAwesomeIcon
            icon={faHeartbeat}
            className={styles.icon}
          />
          <p className={styles.icon_p}>Body & Health</p>
        </a>
      </Link>
     </div>
    <div className={styles.line}>
    <Link href="/furniture">
        <a className={styles.icon_body}>
          <FontAwesomeIcon
            icon={faCouch}
            className={styles.icon}
          />
          <p className={styles.icon_p}>Furniture</p>
        </a>
      </Link>
      <Link href="/grocery">
        <a className={styles.icon_body}>
          <FontAwesomeIcon
            icon={faShoppingBasket}
            className={styles.icon}
          />
          <p className={styles.icon_p}>Grocery</p>
        </a>
      </Link>
      <Link href="/hobbies">
        <a className={styles.icon_body}>
          <FontAwesomeIcon
            icon={faBasketball}
            className={styles.icon}
          />
          <p className={styles.icon_p}>Toys Hobbies & DIY</p>
        </a>
      </Link>
    </div>
    </div>
  )
}
