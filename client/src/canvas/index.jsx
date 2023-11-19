import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import CameraRig from './CameraRig'
import Model from '../Model.jsx'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city'/>
      <pointLight position={[0, 0, 0]} />
      <CameraRig>
        <Center>
          {/* Wrap the Model component in a scene to allow manipulation of the Three.js scene */}
          <scene>
              <Model />
          </scene>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
