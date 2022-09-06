import { playlist } from '../../arrays/electronic';
import SongE from '../../components/SongsE';
import electronic from '../../public/asset/electronic.png'
import Image from 'next/image';
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
<Image src={electronic} 
              height={700}/>
    <div className='Card'>
      {playlistLists.map((playlistList) => (
        <SongE key={playlistList.id} {...playlistList} />
      ))}
    </div>
    <Footer/>
  </>
);
