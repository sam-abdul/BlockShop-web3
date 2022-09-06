import { playlist } from '../../arrays/furniture';
import SongsF from '../../components/SongsF';
import furniture from '../../public/asset/furniture.png';
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
<Image src={furniture} 
              height={700}/>
    <div className='Card'>
      {playlistLists.map((playlistList) => (
        <SongsF key={playlistList.id} {...playlistList} />
      ))}
    </div>
    <Footer/>
  </>
);
