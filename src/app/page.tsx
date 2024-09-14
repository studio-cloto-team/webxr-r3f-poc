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
import { Cubes } from './components/Cube';

export default function Home() {
  return (
    <Canvas shadows camera={{fov: 45, position: [0, 2, 5]}}>
      <SoftShadows />
      <PointerLockControls />
      <Sky sunPosition={[200, 100, 100]} />
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        intensity={.8}
        position={[50, 50, 0]} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Cubes />
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
