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
import {useTheme, useMediaQuery} from '@mui/material';


function SelectionsDisplay() {
    const { activeStep, braceletDetails, options, addToOrder, centerpieceSide, 
            setCenterpieceSide, handleEngravingChange, engravingText, addCenterpieceToOrder, type, setType, setEngravingText, backEngravingText, setBackEngravingText, handleBackEngravingChange } = useSelectionContext()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        let side = 'front-side'
        
        switch(newValue){
            case 0:
                side = 'front-side'
                setCenterpieceSide(side)
            break;
            case 1:
                side = 'back-side'
                setCenterpieceSide(side)
            break;
        }
    };
    
    const handleChangeDesign = (event) => {
        setType(event.target.value);
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
   
  return (
    <div className='bg-white absolute bottom-0 w-full h-[42%]'>
        <div className='w-full flex justify-center'>
            <StepNavigation/>
        </div>
        <div className="flex justify-center mb-10 w-full">
            <div className={`overflow-container ${activeStep == 2 && 'w-full'} ${activeStep != 2 && 'overflow-auto '} flex gap-8`}>
                {activeStep != 2 ? 
                    options.map((optionObj) => {
                        return(
                            <div className='flex-shrink-0 border-transparent border-opacity-50 border-8' onClick={(event) => {event.stopPropagation(); addToOrder(optionObj)}}>
                                <OptionButton opt={optionObj} step={activeStep}/>
                            </div>
                        )
                    })
                : 
                    <div className='w-full flex flex-col'>
                        <div className='w-full '>
                            <Tabs value={value} onChange={handleChange} centered >
                                <Tab label="front-side" sx={{ width: isSmallScreen ? '150px' : '420px'}}/>
                                <Tab label="back-side" sx={{ width: isSmallScreen ? '150px' : '420px'}}/>
                            </Tabs>
                        </div>
                        <div className='flex justify-center md:flex-row flex-col '>
                        <Box sx={{minWidth: 120, maxWidth: 120, marginTop: 5.5, marginRight: isSmallScreen ? 0 : 4 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Engraving"
                                onChange={handleChangeDesign}
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
                                {value == 0 ?
                                    <TextField id="standard-basic" label="Engraving Text " variant="standard" value={engravingText} onChange={(event) => {handleEngravingChange(event, value)}}/>
                                    :
                                    <TextField id="standard-basic" label="Engraving Text " variant="standard" value={backEngravingText} onChange={(event) => {handleBackEngravingChange(event, value)}}/>
                                }
                            </Box>
                        </div>}
                        
                        {/* fix this */}
                        {type == 'icon' && <div className='flex gap-8 mt-12 overflow-auto'>
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
    </div>
  )
}

export default SelectionsDisplay

{/* <div className='flex justify-center'>
<div className='flex md:flex-row justify-center '>
    <Box>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Engraving"
                onChange={type != 'none' ? handleChangeDesign : addCenterpieceToOrder(type)}
            >
                <MenuItem value={'icon'}>Icon</MenuItem>
                <MenuItem value={'text'}>Text</MenuItem>
                <MenuItem value={'none'}>None</MenuItem>
            </Select>
        </FormControl>
    </Box> 
    {type == 'text' && <div className='ml-8 mt-4 md:max-w-[100%] max-w-xs'>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            {value == 0 ?
                <TextField id="standard-basic" label="Engraving Text " variant="standard" value={engravingText} onChange={(event) => {handleEngravingChange(event, value)}}/>
                :
                <TextField id="standard-basic" label="Engraving Text " variant="standard" value={backEngravingText} onChange={(event) => {handleBackEngravingChange(event, value)}}/>
            }
        </Box>
    </div>} */}

    // {/* fix this */}
    // {type == 'icon' && 
    //     <div className='overflow-container overflow-auto flex md:gap-4 gap-2 lg:max-w-6xl md:max-w-4xl max-w-[7%] mt-10'>
    //         {options.map((optionObj) => {
    //             return(
    //                 <div className='flex-shrink-0 border-transparent border-opacity-50 border-8' onClick={(event) => {event.stopPropagation(); addCenterpieceToOrder(optionObj);}}>
    //                     <OptionButton opt={optionObj} side={value}/>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // }
// </div>
// </div>