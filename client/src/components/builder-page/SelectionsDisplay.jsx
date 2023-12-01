import React from 'react'
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StepNavigation from './StepNavigation'
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';
import OptionButton from './OptionButton';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

function SelectionsDisplay() {
    const { activeStep, isStepOptional, isStepSkipped, handleBack, handleNext, steps, selectionTitle, options, addToOrder, centerpieceSide, setCenterpieceSide, handleEngravingChange, engravingText } = useSelectionContext()
    const [value, setValue] = useState(0);
    const [type, setType] = useState('icon');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch(newValue){
            case 0:
                setCenterpieceSide('front-side')
            break;
            case 1:
                setCenterpieceSide('back-side')
            break;
        }
    };
    
    const handleChangeDesign = (event) => {
        setType(event.target.value);
    };

    const addCenterpieceToOrder = (val) => {
        console.log("value", val)

        let details = {
            'type': null,
            'design': null,
            'image': null
        }

        if(type == 'none'){
            details.type = 'none'
            details.design = 'none'
            details.image = 'none'
        }
        else if(type == 'icon'){
            details.type = 'icon'
            details.design = val.name
            details.image = val.image
        }
        else if(type == 'text'){
            details.type = 'text'
            details.design = val.name
            details.image = val.image
        }
        else{
            console.log('error with centerpiece selection')
        }
        console.log("details", details)

        addToOrder(val, centerpieceSide, details)
    }

  return (
    <div className='bg-white absolute bottom-0 w-full h-[42%]'>
        <StepNavigation/>
        <div className='flex justify-center gap-16'>
            {activeStep != 2 ? 
                options.map((optionObj) => {
                    return(
                        <div onClick={(event) => {event.stopPropagation(); addToOrder(optionObj)}}>
                            <OptionButton opt={optionObj} step={activeStep}/>
                        </div>
                    )
                })
            : 
                <div>
                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                        <Tab label="front-side" sx={{  width:'420px' }}/>
                        <Tab label="back-side" sx={{ width:'420px' }}/>
                    </Tabs>
                    <div className='flex'>
                        <Box sx={{minWidth: 120, maxWidth: 120, marginTop: 5.5, marginRight:4 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Engraving"
                                onChange={type != 'none' ? handleChangeDesign : addCenterpieceToOrder()}
                                >
                                    <MenuItem value={'icon'}>Icon</MenuItem>
                                    <MenuItem value={'text'}>Text</MenuItem>
                                    <MenuItem value={'none'}>None</MenuItem>
                                </Select>
                            </FormControl>
                        </Box> 
                        {type == 'text' && <div className='ml-8 mt-4'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Engraving Text ..." variant="standard" value={engravingText} onChange={(event) => {handleEngravingChange(event)}}/>
                            </Box>
                        </div>}
                        
                        {/* fix this */}
                        {type == 'icon' && <div className='flex gap-8 mt-12'>
                            {options.map((optionObj) => {
                                return(
                                    <div onClick={(event) => {event.stopPropagation(); addCenterpieceToOrder(optionObj);}}>
                                        <OptionButton opt={optionObj} side={value}/>
                                    </div>
                                )
                            })}

                        </div>}
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default SelectionsDisplay