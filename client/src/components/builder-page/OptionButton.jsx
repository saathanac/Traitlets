import React from 'react'
import { Tooltip } from '@mui/material';
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';

function OptionButton(opt) {
    const { addToOrder, braceletDetails, activeStep, steps } = useSelectionContext()
    
    const checkSelected = (name) => {
        let face = 'front-side'
        if(activeStep != 2){
            return braceletDetails.braceletDetails[steps[activeStep]] == name
        }
        else if(activeStep == 2){
            if(opt.side == 0){
                face = 'front-side'
            }
            else{
                face = 'back-side'
            }
            return braceletDetails.braceletDetails[steps[activeStep]][face]?.design == name
        }
    }

  return (
    // <div className='w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-400 cursor-pointer' key={1}>
    // </div>
    <div className='relative group mt-16'>
        <Tooltip title={opt.step == 3 ? opt.opt.size : opt.opt.name}>
            <button className={`${checkSelected(opt.opt.name) ? 'border-blue-500 border-2' : 'border-2 border-gray-300 group-hover:border-gray-400'} w-12 h-12 rounded-full bg-white flex justify-center  cursor-pointer text-gray-700 transition-all duration-300 ease-in-out`}>
                {opt.step == 3 && opt.opt.name}
            </button>
        </Tooltip>
    </div>


  )
}

export default OptionButton