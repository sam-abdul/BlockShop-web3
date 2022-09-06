import { playlist } from '../../arrays/body';
import SongB from '../../components/SongsB';
import body from '../../public/asset/body.png'
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
<Image src={body} 
              height={700}/>
    <div className='Card'>
      {playlistLists.map((playlistList) => (
        <SongB key={playlistList.id} {...playlistList} />
      ))}
    </div>
    <Footer/>
  </>
);
