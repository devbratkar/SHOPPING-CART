import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PaymentOverlay.module.css'
import { openPaymentGateway } from '../../features/cart/cartSlice'
import PaymentGateway from '../PaymentGateway/PaymentGateway'
import Layout from '../Layout/Layout'
import { CloseOverlay } from '../../icons/Icons'
import { payment } from '../../features/cart/cartSlice'
import CartTableHeading from '../PaymentGateway/CartTableHeading/CartTableHeading'


const PaymentOverlay = () => {
     const [paymentMessage, setPaymentMessage] = useState('')
     const navigate = useNavigate();
     const { cartItems, total } = useSelector(store => store.cart)
     const dispatch = useDispatch();

     useEffect(()=> {
          if(!cartItems.length){
               setPaymentMessage('Cart is empty, cannot proceed with the payment.')
          }
     },[cartItems])
     const paymentPageHandler = () => {
          navigate('/payment', { replace: true })
          dispatch(payment())
     }

     const closePaymentOverlay = () => {
          dispatch(openPaymentGateway(false))
          document.querySelector('body').classList.remove('overlay')
     }

     const CART =
          <>
               <CartTableHeading />
               {
                    cartItems.map(item => (
                         <PaymentGateway items={item} key={item.id} />
                    ))
               }
          </>

     return (
          <div className={styles.overlay} >
               <div className={styles.closeOverlay} onClick={closePaymentOverlay}>
                    {CloseOverlay}
               </div>
               <Layout>
                    <div className={styles.list}>
                         {cartItems.length ? CART : 'EMPTY CART'}
                         <hr />
                         <div className={styles.total}>
                              <h1>Total:</h1>
                              <h2>${total}</h2>
                              <span className={styles.paymentError}>{paymentMessage}</span>
                              <button onClick={paymentPageHandler} disabled={cartItems.length ? false:true}>PAY</button>
                         </div>
                    </div>
               </Layout>
          </div>
     )
}

export default PaymentOverlay