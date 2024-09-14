import { usePlane } from '@react-three/cannon';
import { MutableRefObject } from 'react';
import { Mesh, PlaneGeometry } from 'three';

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref as MutableRefObject<Mesh>} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color={0x000300} attach="material" />
    </mesh>
  );
}

export default Ground;
