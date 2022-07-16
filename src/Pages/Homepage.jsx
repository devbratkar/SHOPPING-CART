import React from 'react'
import CartContainer from '../components/CartContainer/CartContainer';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import PaymentOverlay from '../components/PaymentOverlay/PaymentOverlay';
import { useSelector } from 'react-redux';

const Homepage = () => {
     const { cartPaymentGateway } = useSelector(store => store.cart)

     return (
          <main>
               {cartPaymentGateway ? <PaymentOverlay /> : null}
               <Navbar />
               <Layout>
                    <CartContainer />
               </Layout>
          </main>
     )
}

export default Homepage