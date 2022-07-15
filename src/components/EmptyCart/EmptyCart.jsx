import React from 'react'
import styles from './EmptyCart.module.css'
const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <h2>YOUR CART</h2>
      <h4>is empty.</h4>
    </div>
  )
}

export default EmptyCart