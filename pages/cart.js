import song from '../arrays/fashion'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice'
import styles from '../styles/CartPage.module.css'
import empty from '../public/asset/empty.jpg'
import Link from 'next/link'

import { Button, Modal, Input } from 'antd'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { useMoralis } from 'react-moralis'
import {Payment} from '@depay/widgets';

function CartPage ({song}) {
  const [delivery, setDelivery] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false)
  const { Moralis, account,  } = useMoralis()

  const handleOk = async () => {

    // Get The Price of MATIC
    DePayWidgets.Payment({
      integration: 'ef5c3819-ab39-4e97-bc03-d26b56674fbe',
      accept:[
        {
          blockchain: 'ethereum',
          amount: 3,
          token: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
          receiver: '0x8f2c0a7532c7e63c741c28785ac2e28b00ab0bf7'
        }
      ]
    })
    const options = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      chain: "eth"
    };
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    const priceMatic = price.usdPrice;
    
    // Send Matic to book store owenr address

    const options1 = {
      type: "native", 
      amount: Moralis.Units.ETH(priceMatic), 
      receiver: "0x8f2C0a7532c7E63c741c28785AC2e28b00Ab0Bf7"
    }
    let result = await Moralis.transfer(options1)



    //Save Transcation details to BlockChain
    const Transaction = Moralis.Object.extend('Transaction')
    const transaction = new Transaction()

    transaction.set('Customer', account)
    transaction.set('Delivery', delivery)

    transaction.save()
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, song) => accumulator + song.quantity * song.price,
      0
    )
  }

  return (
    <>
      <div></div>
      <div className={styles.container}>
        {cart.length === 0 ? (
          <div className={styles.nav}>
            <Image src={empty} />
            <h1>
              Your Cart is Empty! Go to the{' '}
              <Link href="/">
                <b>Home</b>
              </Link>{' '}
              Page and start shopping
            </h1>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div>Image</div>
              <div>Name</div>
              <div>Category</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            <br></br>
            {cart.map((song) => (
              <div className={styles.body}>
                <div className={styles.image}>
                  {/* <Image src={song.image} height="90" width="65" /> */}
                </div>
                <p>{song.name}</p>
                <p>{song.categories}</p>
                <p> {song.price}ETH</p>
                <p>{song.quantity}</p>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(incrementQuantity(song.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(decrementQuantity(song.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(removeFromCart(song.id))}>
                    x
                  </button>
                </div>
                <p> {song.quantity * song.price}ETH</p>
              </div>
            ))}
            <h2>Grand Total: {getTotalPrice()}ETH</h2>

            <Button
              type="primary"
              onClick={() => setIsModalVisible(true)}
              style={{
                width: '100%',
                marginTop: '50px',
                backgroundColor: 'rgb(88, 127, 255)',
                padding: '5px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              <ShoppingCartOutlined /> Buy Now
            </Button>

            <Modal
              
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              className={styles.modal}
            >
              <div>
                <h1 className={styles.modalH1}>Purchase Product</h1>
                <h2>
                  <b>Total:{getTotalPrice()}ETH</b>
                </h2>
                <p>
                  Make sure your address is correct to avoid errors when making
                  delivery
                </p>
                <h4><b>Delivery Address</b></h4>

                <Input className={styles.modalInput} onChange={(value) => setDelivery(value)}></Input>
              </div>
              <div className={styles.ButtonBody}>
                <button onClick={handleCancel}>Cancel</button>
              </div>

            </Modal>
          </>
        )}
      </div>
    </>
  )
}

export default CartPage
