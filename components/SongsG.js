
import NextLink from 'next/link'

const Song = ({ id, name, price, price_image, image }) => (
  <div className='Card'>
      <div className='frontCard'>
  
  <div>
    <img className='frontImg' src={image} />
    <p>{name}</p>
    <div className='frontPrice'>
        <img className='price_img' src={price_image}/>
        <p>{price}</p>
    </div>
  </div>
  <NextLink href={`/grocery/[id]`} as={`/grocery/${id}`} passHref>
      <button className='modal-more'> more </button>
</NextLink>
</div>
  </div>
)

export default Song
