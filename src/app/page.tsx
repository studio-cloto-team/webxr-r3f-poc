'use client';
import { Physics, RigidBody } from '@react-three/rapier';
import { PointerLockControls, Sky, SoftShadows } from '@react-three/drei';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing';
import React from 'react';
import { Canvas } from '@react-three/fiber';
// import Cube from './components/Cube';
import Ground from './components/Ground';
import Player from './components/Player';

export default function Home() {
  return (
    <Canvas shadows camera={{fov: 45, position: [0, 2, 5]}}>
      <SoftShadows />
      <PointerLockControls />
      <Sky sunPosition={[200, 100, 100]} />
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        position={[10, 10, 10]}
        intensity={1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
}
