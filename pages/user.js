import { Navbar } from '../components/Navbar'
import { useMoralis } from 'react-moralis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useSelector } from 'react-redux';


export default function User() {
  const { authenticate, isAuthenticated, logout, user } = useMoralis()

  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <div>
      <Navbar />
      {isAuthenticated ? (
        <>
          <div className="note">
            <div className="noteLeft">
              Welcome {user.get('username')}
            </div>
            <div className="noteRight">
              Your wallet address is {user.get('ethAddress')}
            </div>
            <div className='noteCart'>
          <Link href="/cart">
            <p>Your Cart ({getItemsCount()})</p>
          </Link>
          </div>
         <Link href='https://www.linkedin.com/in/sam-abdul-6b5875196/'>
         <div className='noteCart'>
            Contact Us
          </div>
         </Link>
         <Link href='https://twitter.com/SamAbdul_'>
         <div className='noteCart'>
            About Us
          </div>
         </Link>
          </div>
        
          <button className="logout" onClick={logout}>
            Log out
          </button>
        </>
      ) : (
        <div className="connect">
          <FontAwesomeIcon
            icon={faBomb}
            style={{ fontSize: 50 }}
          />{' '}<br></br>
          Connect Your Wallet to Access the User page
        </div>
      )}
    </div>
  )
}
