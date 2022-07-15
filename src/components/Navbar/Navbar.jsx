import React from 'react'
import styles from './Navbar.module.css'
import { useSelector } from 'react-redux'
import { CartIcon } from '../../icons/Icons';

const Navbar = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h1>Redux Cart</h1>
      </div>
      <div>
        <div className={styles.cart}>
          <div style={{ width: '70px', padding: '10px' }} className={styles.cartRight}>
            <CartIcon />
            <h3 className={styles.cartItems}>{cartItems.length}</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar