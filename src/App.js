import React from 'react'
import CartContainer from './components/CartContainer/CartContainer';
import Layout from './components/Layout/Layout';
// import { useSelector } from 'react-redux'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <Layout>
        <CartContainer />
      </Layout>
    </main>
  )
}

export default App