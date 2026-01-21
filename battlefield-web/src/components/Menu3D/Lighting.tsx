export default function Lighting() {
  return (
    <>
      {/* Luz ambiente suave para iluminação geral */}
      <ambientLight intensity={0.2} />

      {/* Luz spotlight da lâmpada - principal fonte de luz */}
      <spotLight
        position={[0, 6, 0]}
        angle={0.8}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Luz de preenchimento sutil */}
      <pointLight position={[5, 3, 5]} intensity={0.3} color="#ff8844" />
      <pointLight position={[-5, 3, -5]} intensity={0.3} color="#4488ff" />

      {/* Luz hemisférica para simular reflexão do ambiente */}
      <hemisphereLight
        color="#ffffff"
        groundColor="#444444"
        intensity={0.3}
      />
    </>
  );
}
