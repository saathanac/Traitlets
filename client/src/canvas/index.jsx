import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import Model from '../Model.jsx'
import {SelectionContextProvider} from '/Users/alexcholmsky/Traitlets/client/src/context/SelectionContext.jsx';


const CanvasModel = () => {
  return (
    <SelectionContextProvider>
    <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset='city'/>
        <pointLight position={[0, 0, 0]} />
        <CameraRig>
            {/* <Backdrop/> */}
            <Center>
                <Model />
            </Center>
        </CameraRig>
    </Canvas>
    </SelectionContextProvider>
  )
}

export default CanvasModel