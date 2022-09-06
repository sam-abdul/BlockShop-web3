import { playlist } from '../../arrays/fashion';
import Songs from '../../components/Songs';
import fashion from '../../public/asset/fashion.png'
import Image from 'next/image';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer'


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
<Image src={fashion} 
              height={700}/>
    <div className='Card'>
      {playlistLists.map((playlistList) => (
        <Songs key={playlistList.id} {...playlistList} />
      ))}
    </div>
<Footer/>
  </>
);
