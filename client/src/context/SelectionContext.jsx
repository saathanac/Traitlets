// MyContext.js
import React, { createContext, useReducer, useContext, useState, useEffect } from 'react';
import traitletOptions from '../traitletOptions';

// Define your initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create the context
const SelectionContext = createContext(initialState);

// Define a provider component
const SelectionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [options, setOptions] = useState([])
  const [selectionTitle, setSelectionTitle] = useState('Base Beads')
  const steps = ['base-beads', 'accessory-beads', 'centerpiece', 'size'];

  useEffect(() => {
    renderOptions()
  }, [activeStep])

  const isStepOptional = (step) => {
    return step === null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const renderOptions = () => {
    switch(steps[activeStep]) {
      case 'base-beads':
        setOptions(traitletOptions['base-beads'])
        setSelectionTitle('Base Beads')
      break;
      case 'accessory-beads':
        setOptions(traitletOptions['accessory-beads'])
        setSelectionTitle('Accessory Beads')
      break;
      case 'centerpiece':
        setOptions(traitletOptions['centerpiece'])
        setSelectionTitle('Centrepiece')
      break;
      case 'size':
        setOptions(traitletOptions['size'])
        setSelectionTitle('Size')
      break;
    }
    console.log(options)
  }

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <SelectionContext.Provider value={{ state, dispatch, activeStep, setActiveStep, skipped, setSkipped, isStepOptional, isStepSkipped,  
      handleSkip, handleBack, handleNext, steps, options, selectionTitle}}>
      {children}
    </SelectionContext.Provider>
  );
};

// Create a custom hook for using the context
const useSelectionContext = () => {
  return useContext(SelectionContext);
};

// Define a reducer function to update the state (optional)
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { SelectionContextProvider, useSelectionContext, SelectionContext };
