import twitter from '../public/asset/twitter.png'
import linkedin from '../public/asset/linkedin.png'
import website from '../public/asset/website.png'
import styles from '../styles/com.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/asset/blockshop.png'

const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <Image src={Logo} height={30} width={30} />
      <span className="text-xl font-bold tracking-wide text-white">
        BlockShop
      </span>
      <div className={styles.footer}>
        
        Sam Abdul
        <div className={styles.socialBody}>
          <Link href="https://samabdul.com/">
            <div className={styles.social}>
              <Image src={website} height={30} width={40} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/sam-abdul-6b5875196/">
            <div className={styles.social}>
              <Image src={linkedin} height={30} width={40} />
            </div>
          </Link>
          <Link href="https://twitter.com/SamAbdul_">
            <div className={styles.social}>
              <Image src={twitter} height={30} width={40} />
            </div>
          </Link>
        </div>
      <div className={styles.NavBody}>
        <Link href='/'>
        <div className={styles.Nav}>Home  </div>
        </Link>
        <Link href=''>
        <div className={styles.Nav}> | Contact | </div>
        </Link>
        <Link href=''>
        <div className={styles.Nav}>About  </div>
        </Link>
      </div>

      
      </div>

    </div>
  )
}

export default Footer
