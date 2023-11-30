// MyContext.js
import React, { createContext, useReducer, useContext, useState, useEffect } from 'react';
import traitletOptions from '../traitletOptions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [braceletDetails, setBraceletDetails] = useState({
    braceletDetails: {
      'base-beads': null,
      'accessory-beads': null,
      'centerpiece': {
        'front-side': {
          'type': null,
          'design': null,
        },
        'back-side': {
          'type': null,
          'design': null,
        },
      },
      'size': null,
    },
  });

  useEffect(() => {
    renderOptions()
  }, [activeStep])
  
  const addToOrder = (name, side, design) => {
    setBraceletDetails((prevDetails) => {
      const tempBraceletInfo = { ...prevDetails }; // Create a shallow copy
  
      if (activeStep !== 2) {
        const property = steps[activeStep];
        if((activeStep == 3 && name.name)){
          tempBraceletInfo.braceletDetails[property] = name?.name;
        }
        else{
          tempBraceletInfo.braceletDetails[property] = name;
        }
      } else if (side && design && activeStep === 2) {
        // Make sure the centerpiece object exists before updating
        tempBraceletInfo.braceletDetails.centerpiece = tempBraceletInfo.braceletDetails.centerpiece || {};
        tempBraceletInfo.braceletDetails.centerpiece[side] = design;
      } else {
        console.error("Error with addToOrder");
      }
  
      return { ...tempBraceletInfo }; // Return a new object reference
    });
  };
  
  
  useEffect(() => {
    console.log('Bracelet Details Updated:', braceletDetails);
  }, [braceletDetails]); // Run the effect whenever braceletDetails changes

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
  }


  const handleNext = () => {
    if(stepCompleted()){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else{
      toast.warn("Please make a selection to proceed", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const stepCompleted = () => {
    if((steps[activeStep] == 'base-beads' && !braceletDetails.braceletDetails['base-beads']) 
      || (steps[activeStep] == 'size' && !braceletDetails.braceletDetails['size'])){
      return false
    }
    return true
  }

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
      handleSkip, handleBack, handleNext, steps, options, selectionTitle, addToOrder, braceletDetails, stepCompleted}}>
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
