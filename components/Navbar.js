import Link from 'next/link'
import { useState } from 'react'
import { useMoralis } from 'react-moralis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import Logo from '../public/asset/blockshop.png';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export const Navbar = () => {
  const [active, setActive] = useState(false)

  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const handleClick = () => {
    setActive(!active)
  }
  const { authenticate, isAuthenticated, logout, account, user, authError } = useMoralis()
  return (
    <>
      <nav className="flex flex-wrap items-c  enter bg-black p-3 ">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
           <Image src={Logo} height={30} width={30}/>
            <span className="text-xl font-bold tracking-wide text-white">
              BlockShop
            </span>
          </a>
        </Link>
        <button
          className=" ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-blue-600 hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
          <Link href="/search">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-blue-400 hover:text-white lg:inline-flex lg:w-auto">
              <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: 20, color: 'white' }}
                />
              </a>
            </Link>
          <Link href="/user">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-blue-400 hover:text-white lg:inline-flex lg:w-auto">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: 20, color: 'white' }}
                />({getItemsCount()})
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-blue-400 hover:text-white lg:inline-flex lg:w-auto ">
                {isAuthenticated ? (
                  <>
                    <button className="w-full font-bold" onClick={logout}>
                      Log out
                    </button>
                    {/* <h2>Welcome {user.get('username')}</h2>
                    <h2>Your wallet address is {user.get('ethAddress')}</h2> */}
                  </>
                ) : (
                  <button
                    className="w-full font-bold"
                    onClick={() => {
                      authenticate({ provider: 'metamask' })
                    }}
                  >
                   {account? <span>{account.slice(0,5)}...</span> : <span>Connect Wallet</span> }  
                  </button>

                  
                )}
                {authError && <div className={styles.error}>
                  <span>{authError.name}</span>
                  {authError.message}
                  </div>}
              </a>
            </Link>
            {/* <Link href="/contact">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-blue-400 hover:text-white lg:inline-flex lg:w-auto">
                Contact
              </a>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  )
}
