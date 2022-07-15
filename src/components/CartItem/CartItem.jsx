import React from 'react'
import styles from './CartItem.module.css'
import { IncreaseAmount, DecreaseAmount } from '../../icons/Icons'
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../../features/cart/cartSlice';


const CartItem = ({ item, amount }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(increase(item.id))
  }

  const decreaseQuantity = () => {
    
    dispatch(decrease(item.id))

  }

  const removeItemHandler = () => {
    dispatch(removeItem(item.id));
  }

  return (
    <>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={item.img} alt={item.title} />
        </div>
        <div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.price}>$ {item.price}</div>
          <button className={styles.remove} onClick={removeItemHandler}>Remove</button>
        </div>
        <div className={styles.amount}>
          <button className={styles.pointer} onClick={increaseQuantity}><IncreaseAmount /></button>
          <span style={{ paddingTop: '10%' }}>{item.amount}</span>
          <button className={styles.pointer} onClick={decreaseQuantity}><DecreaseAmount /></button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default CartItem