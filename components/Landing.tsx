import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function Landing() {
  return (
    <>
      <Canvas>
        <color attach="background" args={['black']} />
        <Stars saturation={0} count={400} speed={0.5} />
        <OrbitControls />
        <mesh>
          <ambientLight intensity={1} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>
      </Canvas>
    </>
  );
}

export default Landing;
