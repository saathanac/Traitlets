import React from 'react'
import { Tooltip } from '@mui/material';

function OptionButton(opt, activeStep) {
    console.log(opt.step)
  return (
    // <div className='w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-400 cursor-pointer' key={1}>
    // </div>
    <div className='relative group mt-[5.5%]'>
        <Tooltip title={opt.step == 3 ? opt.opt.size : opt.opt.name}>
            <button className='w-12 h-12 rounded-full border-2 bg-white flex justify-center border-gray-300 group-hover:border-gray-400 cursor-pointer text-gray-700 transition-all duration-300 ease-in-out'>
                {opt.step == 3 && opt.opt.name}
            </button>
        </Tooltip>
    </div>


  )
}

export default OptionButton