import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';

function StepNavigation() {
    const { activeStep, isStepOptional, isStepSkipped, handleBack, handleNext, steps, selectionTitle, options } = useSelectionContext()
    return (
        <div>
            {activeStep === steps.length ? (
                <React.Fragment>
                <Button
                    color="black"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, backgroundColor: '#333', color: 'white'}}
                    >
                        <KeyboardArrowLeft />
                    </Button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width:'20%', margin:'auto' }} >
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1, '& .MuiSvgIcon-root': { color: 'gray' } }}
                        >
                            <KeyboardArrowLeft />
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                            <Typography sx={{ mt: 2, mb: 1, fontSize: '14pt'}} className='text-gray-500 w-96 overflow-hidden text-center text-lg transition-all duration-300 ease-in-out'>{selectionTitle}</Typography>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                            {<KeyboardArrowRight />}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </div>
        )
    }

export default StepNavigation