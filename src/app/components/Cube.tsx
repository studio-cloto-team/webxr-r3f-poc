import { useBox } from '@react-three/cannon';
import { BoxGeometry, Mesh } from 'three';
import { MutableRefObject } from 'react';

type Props = {
  position: [number, number, number];
};

function Cube({ position }: Props) {
  const [ref] = useBox<Mesh>(() => ({
    position,
  }));

  return (
    <mesh ref={ref as MutableRefObject<Mesh>} castShadow>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial color={0xff01fb} attach="material" />
    </mesh>
  );
}

export default Cube;
