import React from 'react'
import Stepper from './Stepper'
import CanvasModel from '../../canvas'

function TopDisplay() {
  return (
    <div className='h-[52%]'>
        <div className='px-[25%] py-12'>
            <Stepper/>
        </div>
        <div className='h-[80%]'>
          <CanvasModel/>
        </div>
    </div>
  )
}

export default TopDisplay