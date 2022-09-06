import { playlist } from '../../arrays/hobbies';
import SongsH from '../../components/SongsH';
import toys from '../../public/asset/toys.png';
import Image from 'next/image';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';


export const getStaticProps = async () => {
  return {
    props: {
      playlistLists: playlist,
    },
  };
};

export default ({ playlistLists }) => (
  <>
  <Navbar/>
<Image src={toys} 
              height={700}/>
    <div className='Card'>
      {playlistLists.map((playlistList) => (
        <SongsH key={playlistList.id} {...playlistList} />
      ))}
    </div>
    <Footer/>
  </>
);
