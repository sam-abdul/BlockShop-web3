import { playlist } from '../../arrays/grocery'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart.slice'
import { Navbar } from '../../components/Navbar'
import styles from '../../styles/But.module.css'
import styles2 from '../../styles/id.module.css'
import Footer from '../../components/Footer'

export const getStaticProps = async ({ params }) => {
  const playlistList = playlist.filter((p) => p.id.toString() === params.id)
  return {
    props: {
      song: playlistList[0],
    },
  }
}




export const getStaticPaths = async () => {
  const paths = playlist.map((song) => ({
    params: { id: song.id.toString() },
  }))

  return { paths, fallback: false }
};


export default ({ song }) => {
  const dispatch = useDispatch();
  return(

  <>
   <Navbar/>
  <div className={styles2.view}>
 
    <div className="view">
     
     <img className="viewImg" src={song.image} />
     <h1 className="viewName">{song.name}</h1>
     <div className="viewThird">
       <div className="viewCate">{song.categories}</div>
 
       <div className="viewBrand">{song.Brand}</div>
 
       <div className="viewType">{song.Type}</div>
     </div>
     <p className='viewDes'>{song.description}</p>
     <div className="viewPrice">
       <img className="viewPriceImg" src={song.price_image} />
       <p className="viewPricePrice"> {song.price}</p>
     </div>
     <div className={styles.addCart}>
       <button onClick={() => dispatch(addToCart(song))}><b>Add to Cart</b></button>
     </div>
   </div></div>
   <Footer/>
   </>
  )
}
