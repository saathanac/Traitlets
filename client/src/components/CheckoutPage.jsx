import React from 'react'
import OrderSummary from './checkout-page/OrderSummary'
import PaymentDetails from './checkout-page/PaymentDetails'

const CheckoutPage = () => {
  return (
    <div className='absolute bg-gray-200 h-[100%] w-full'>
        <OrderSummary/>
        <PaymentDetails/>
    </div>
  )
}

export default CheckoutPage