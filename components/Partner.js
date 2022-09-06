import partner from '../public/asset/partnership.png'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

const Partner = () => {
    return ( 
        <div className={styles.partner}>
<Image src={partner}
height={700}/>
        </div>
     );
}
 
export default Partner;