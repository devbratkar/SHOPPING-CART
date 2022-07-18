import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import NoPageFound from './Pages/NoPageFound'
import PaymentGateway from './Pages/PaymentGateway'
import { useSelector } from 'react-redux'


const App = () => {
  const {paymentRoute} = useSelector(store=> store.cart)
  // const {initialText,age} = useSelector(store=> store.text)
  // console.log(initialText,age);

  return (
    <Routes>
      <Route path='/' exact={true} element={<Homepage />} />
      {paymentRoute ? <Route path='/payment' exact={true} element={<PaymentGateway />} /> : null }
      <Route path='*' element={<NoPageFound />} />
    </Routes>
  )
}

export default App