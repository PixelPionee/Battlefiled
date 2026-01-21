import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import Table from './Table';
import Lamp from './Lamp';
import Lighting from './Lighting';
import FolderGrid from './FolderGrid';
import type { Game } from '../../tipos/battlefield.types';

interface SceneProps {
  games: Game[];
  onFolderClick: (gameId: string) => void;
  selectedFolder: string | null;
}

export default function Scene({ games, onFolderClick, selectedFolder }: SceneProps) {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas shadows>
        {/* Câmera perspectiva de cima para baixo */}
        <PerspectiveCamera
          makeDefault
          position={[0, 8, 5]}
          fov={50}
          rotation={[-Math.PI / 3, 0, 0]}
        />

        {/* Controles de órbita (opcional, para debug) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
        />

        {/* Sistema de iluminação */}
        <Lighting />

        {/* Suspense para carregamento de assets */}
        <Suspense fallback={null}>
          {/* Mesa de madeira */}
          <Table />

          {/* Lâmpada suspensa */}
          <Lamp />

          {/* Grid de pastas */}
          <FolderGrid
            games={games}
            onFolderClick={onFolderClick}
            selectedFolder={selectedFolder}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
