import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';
import { useNavigate } from 'react-router-dom';

function StepNavigation() {
    const { activeStep, isStepOptional, isStepSkipped, handleBack, handleNext, steps, selectionTitle, options, stepCompleted, braceletDetails } = useSelectionContext()
    const navigate = useNavigate()

    const goToCheckout = () => {
        localStorage.setItem('braceletDetails', JSON.stringify(braceletDetails));
        navigate('/checkout')
    }
    return (
        <div className=' md:w-30 w-80'>
            <div className={`md:mb-10 ${activeStep != 2 && 'mb-10'} flex justify-center align-center`}> 
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width:'100%', margin:'auto' }} >
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

                        <Button 
                            onClick={activeStep === steps.length - 1 ? goToCheckout : handleNext } 
                            disabled={activeStep === steps.length - 1 && !braceletDetails.braceletDetails['size']}
                        >
                            {activeStep === steps.length - 1 
                                ? <><ShoppingCartIcon className='mr-2 '/> <p className='md:visible invisible'>Checkout</p></>
                                : <KeyboardArrowRight /> 
                            } 
                        </Button>
                    </Box>
                </React.Fragment>
                
            </div>
            
            {activeStep == 3 && 
                        <div className='text-gray-600 md:absolute md:top-8 lg:mb-0 mb-10 right-16 flex justify-center align-center'>
                            <a href="https://cladright.com/how-to-measure-wrist-size/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-gray-500 text-sm underline font-medium'> Size guide</a>
                        </div>
                    }
        </div>
        )
    }

export default StepNavigation
