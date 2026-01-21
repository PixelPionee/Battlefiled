import { useState, useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Mesh } from 'three';

interface FolderProps {
  position: [number, number, number];
  gameTitle: string;
  gameId: string;
  onClick: (gameId: string) => void;
  isSelected: boolean;
}

export default function Folder({ position, gameTitle, gameId, onClick }: FolderProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Animação sutil de hover
  useFrame(() => {
    if (meshRef.current && lightRef.current) {
      // Efeito de elevação no hover
      const targetY = hovered ? position[1] + 0.05 : position[1];
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.1
      );

      // Intensidade da luz no hover
      const targetIntensity = hovered ? 2 : 0;
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        targetIntensity,
        0.1
      );
    }
  });

  return (
    <group position={position}>
      {/* Pasta (plano retangular) */}
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(gameId)}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[2.0, 2.6]} />
        <meshStandardMaterial
          color={hovered ? "#d4c4a8" : "#c4b49a"}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Texto "BATTLEFIELD" na capa */}
      <Text
        position={[0, 0.02, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.20}
        color="#1a1a1a"
        anchorX="center"
        anchorY="middle"
      >
        BATTLEFIELD
      </Text>

      {/* Título do jogo específico */}
      <Text
        position={[0, 0.02, -0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.14}
        color="#2a2a2a"
        anchorX="center"
        anchorY="middle"
      >
        {gameTitle.replace('Battlefield: ', '').replace('Battlefield ', '')}
      </Text>

      {/* Luz pontual para efeito de hover */}
      <pointLight
        ref={lightRef}
        position={[0, 0.5, 0]}
        intensity={0}
        distance={2}
        color="#ffaa00"
      />

      {/* Borda da pasta (detalhe visual) */}
      <mesh
        position={[0, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[2.08, 2.68]} />
        <meshBasicMaterial color="#8a7a6a" side={THREE.BackSide} />
      </mesh>
    </group>
  );
}
