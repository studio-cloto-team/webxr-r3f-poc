import { RigidBody } from '@react-three/rapier';

function Ground() {
  return (
    <RigidBody>
      <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial color="grey" attach="material" />
      </mesh>
    </RigidBody>
  );
}

export default Ground;
