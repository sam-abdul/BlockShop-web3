import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Fifty from '../components/Fifty'
import Brands from '../components/Brands'
import New from '../components/New'
import Partner from '../components/Partner'
import Footer from '../components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
     
      <Navbar />
      {/* <Carousel /> */}
      <Categories />
      <Fifty />
      {/* <Brands/> */}
      {/* <New/> */}
      {/* <Partner/> */}
      <Footer/>
      
    </div>
  )
}
