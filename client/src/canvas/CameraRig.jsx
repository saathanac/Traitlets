import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const CameraRig = ({children}) => {
    const group = useRef();

    useFrame((state, delta) => {
        const isBreakPoint = window.innerWidth <= 1260
        const isMobile = window.innerHeight <= 600

        let targetPosition = [0, 0, 2.5]
        if(isBreakPoint) targetPosition = [0,0,3]
        if(isMobile) targetPosition = [0,0.2, 2]
        easing.damp3(state.camera.position, targetPosition, 0.15, delta)
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 5, -state.pointer.x / 5, 0],
            0.1,
            delta
        )
    })


  return <group ref={group}>{children}</group>
}

export default CameraRig