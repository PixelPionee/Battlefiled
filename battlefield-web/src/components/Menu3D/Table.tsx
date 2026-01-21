import * as THREE from 'three';

export default function Table() {
  return (
    <mesh
      receiveShadow
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      {/* Geometria da mesa - plano retangular (aumentado) */}
      <planeGeometry args={[18, 12]} />
      
      {/* Material da mesa - madeira escura */}
      <meshStandardMaterial
        color="#2a1810"
        roughness={0.8}
        metalness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
