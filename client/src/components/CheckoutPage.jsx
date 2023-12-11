import React from 'react'
import OrderSummary from './checkout-page/OrderSummary'
import PaymentDetails from './checkout-page/PaymentDetails'

const CheckoutPage = (props) => {
  return (
      <div className="absolute lg:flex flex-col lg:flex-row w-full h-full">
      <div className="lg:w-1/2 w-full bg-white">
      <OrderSummary/>
      </div>
      <div className="lg:w-1/2 w-full bg-gray-200">
      <PaymentDetails/>
      </div>
    </div>
  )
}

export default CheckoutPage
