import React, { useEffect } from 'react'
import styles from './CartContainer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, updateTotal } from '../../features/cart/cartSlice'
import EmptyCart from '../EmptyCart/EmptyCart'
import CartItem from '../CartItem/CartItem'

const CartContainer = () => {
     const { cartItems, amount, total } = useSelector((store) => store.cart);
     const dispatch = useDispatch();

     const clearCartHandler = () => {
          dispatch(clearCart());
     }

     useEffect(() => {
          let total = 0;
          cartItems.forEach(element => total += (element.amount * element.price))
          dispatch(updateTotal(total))
     }, [cartItems, dispatch])

     const cart =
          <>
               <div className={styles.containerHeading}>
                    <h1>YOUR BAG</h1>
               </div>
               <div className="cartItems">
                    {cartItems.map((item) => (
                         <CartItem item={item} amount={amount} key={item.id} />
                    ))}
               </div>
               <div className={styles.total}>
                    <h2>TOTAL </h2>
                    <h2 style={{ textAlign: 'right' }}>$ {total}</h2>
               </div>
               <hr />
               <div className={styles.clearCartBtn}>
                    <button onClick={clearCartHandler}>CLEAR CART</button>
               </div>
          </>
          
     return (
          <div className={styles.container}>
               {cartItems.length ? cart : <EmptyCart />}
          </div>
     )
}

export default CartContainer