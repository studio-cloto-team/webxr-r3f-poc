import { CuboidCollider, RigidBody } from '@react-three/rapier';
import {Gltf} from '@react-three/drei';

function Ground() {
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <Gltf castShadow receiveShadow position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} src="/territory.glb"/>
    </RigidBody>
  );
}

export default Ground;
