import React from 'react'
import styles from './PaymentGateway.module.css'

const PaymentGateway = ({items}) => {
     return (
          <ul className={styles.unorderedList}>
               <li><img src={items.img} alt={items.title} /></li>
               <li>{items.title}</li>
               <li>{items.price}</li>
               <li>{items.amount}</li>
               <li className={styles.totalPrice}>{items.amount * items.price}</li>
          </ul>
     )
}

export default PaymentGateway