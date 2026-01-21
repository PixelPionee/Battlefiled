export default function Lamp() {
  return (
    <group position={[0, 6, 0]}>
      {/* Cabo da lâmpada */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Soquete da lâmpada */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.06, 0.15, 16]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Lâmpada (bulbo) */}
      <mesh position={[0, -0.15, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#fff8e1"
          emissive="#ffaa00"
          emissiveIntensity={1.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Luz pontual da lâmpada (adicional ao spotlight) */}
      <pointLight
        position={[0, -0.15, 0]}
        intensity={0.5}
        distance={3}
        color="#fff8e1"
      />
    </group>
  );
}
