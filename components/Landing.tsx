import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Landing() {
  return (
    <>
      <Canvas>
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
