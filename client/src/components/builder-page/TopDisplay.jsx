import React from 'react'
import Stepper from './Stepper'
import CanvasModel from '../../canvas'

function TopDisplay() {
  return (
    <div>
        <div className='flex px-[25%] mt-5'>
            <Stepper/>
        </div>
        <div style={{ height: '50%' }} className='absolute w-full'>
          <CanvasModel/>
        </div>
    </div>
  )
}

export default TopDisplay