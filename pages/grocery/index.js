import { playlist } from '../../arrays/grocery';
import SongsG from '../../components/SongsG';
import grocery from '../../public/asset/grocery.png';
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
<Image src={grocery} 
              height={700}/>
    <div className='Card'>
      {playlistLists.map((playlistList) => (
        <SongsG key={playlistList.id} {...playlistList} />
      ))}
    </div>
    <Footer/>
  </>
);
