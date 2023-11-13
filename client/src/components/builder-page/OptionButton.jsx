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
            <button className='w-12 h-12 rounded-full border-2 bg-white flex p-0.5 justify-center border-gray-300 group-hover:border-gray-400 cursor-pointer text-gray-700 transition-all duration-300 ease-in-out'>
                {opt.step == 3 && (
                    <div className='m-auto'>
                        {opt.opt.name}
                    </div>
                )}
                {opt.step != 3 && opt.opt.image?.length > 0 && (
                    <img src={opt.opt.image} className='object-cover w-96 h-full rounded-full'  />
                )}

            </button>
        </Tooltip>
    </div>


  )
}

export default OptionButton