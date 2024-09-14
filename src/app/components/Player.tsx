import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { usePersonControls } from "@/app/hooks/usePersonControls"

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const easing = TWEEN.Easing.Quadratic.Out;


function Player() {
  const playerRef = useRef<RapierRigidBody>(null);
  const { forward, backward, left, right, jump } = usePersonControls();

  useFrame((state) => {
    if(!playerRef.current) return;

    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);

    playerRef.current.wakeUp();
    playerRef.current.setLinvel({x: direction.x, y: velocity.y, z: direction.z}, true);
  });
  return (
    <>
      <RigidBody position={[0, 1, -2]} ref={playerRef}>
        <mesh>
          <capsuleGeometry args={[0.5, 0.5]}/>
        </mesh>
      </RigidBody>
    </>
  );
}

export default Player;
