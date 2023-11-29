import React from 'react'
import CanvasModel from '../../canvas'

const OrderSummary = () => {
  return (
    <div className='w-1/2 flex flex-col h-full bg-white rounded text-black px-48 py-32'>
        <div className='font-semibold text-2xl text-gray-500 mb-6'>
            Order Summary
        </div>
        <div className='flex'>
            <div className='h-48 w-60 border-2 rounded-lg bg-gray-50'>
                <CanvasModel/>
            </div>
            <div className='ml-8 text-sm text-gray-700 mt-2'>
                <p className='text-base font-medium text-gray-800 mb-2'>Customized Traitlet</p>
                <p>Base bead:</p>
                <p>Accessory bead:</p>
                <p>Front Centrepiece:</p>
                <p>Back Centrepiece:</p>
                <p>Size:</p>
            </div>
        </div>
        <div className='mt-12 text-lg'>
            <hr className='mb-4 border'/>
            <div className='px-4 flex text-base text-gray-500 justify-between'>
                <p>Standard Traitlet</p>
                <p>+ $20.00</p>
            </div>
            <div className='px-4 flex text-base text-gray-500 justify-between'>
                <p>Additional custom design</p>
                <p>+ $5.00</p>
            </div>
            <hr className='mt-4'/>
            <div className='py-4 px-4 flex justify-between'>
                <p>Total</p>
                <p>$25.00</p>
            </div>
            <hr className='border'/>
        </div>
    </div>
  )
}

export default OrderSummary