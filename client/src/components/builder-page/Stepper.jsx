import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';

export default function HorizontalLinearStepper() {
    const { activeStep, isStepOptional, isStepSkipped, handleBack, handleNext, steps } = useSelectionContext()

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                    <Step key={index} {...stepProps}>
                        <StepLabel {...labelProps}></StepLabel>
                    </Step>
                );
                })}
            </Stepper>
        </Box>
    );
}