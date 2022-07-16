import React from 'react'
import styles from './CartTableHeading.module.css'
const CartTableHeading = ({items}) => {
     return (
          <ul className={styles.unorderedList}>
               <li></li>
               <li>TITLE</li>
               <li>PRICE (per quantity)</li>
               <li>QUANTITY</li>
               <li className={styles.totalPrice}>TOTAL</li>
          </ul>
     )
}

export default CartTableHeading