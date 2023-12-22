import React from 'react'
import OrderSummary from './checkout-page/OrderSummary'
import PaymentDetails from './checkout-page/PaymentDetails'
import HomeHamburger from './home-page/HomeHamburger'

const CheckoutPage = (props) => {
  return (
      <div className="absolute lg:flex flex-col lg:flex-row w-full h-full">
        <div className='absolute top-2 right-2 z-50'>
          <HomeHamburger/>
        </div>
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
