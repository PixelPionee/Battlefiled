import type { Game } from '../../tipos/battlefield.types';
import Folder from './Folder';

interface FolderGridProps {
  games: Game[];
  onFolderClick: (gameId: string) => void;
  selectedFolder: string | null;
}

export default function FolderGrid({ games, onFolderClick, selectedFolder }: FolderGridProps) {

  // Layout: 5 pastas em formato de cruz/diamante
  // Posições ajustadas para pastas maiores (2.0 x 2.6)
  const positions: [number, number, number][] = [
    [0, 0.01, -3.5],    // Topo (Bad Company)
    [-3.5, 0.01, 0],    // Esquerda (Bad Company 2)
    [0, 0.01, 0],       // Centro (Battlefield 3)
    [3.5, 0.01, 0],     // Direita (Battlefield 4)
    [0, 0.01, 3.5],     // Baixo (Hardline)
  ];

  return (
    <group>
      {games.map((game, index) => (
        <Folder
          key={game.id}
          position={positions[index] || [0, 0.01, 0]}
          gameTitle={game.title}
          gameId={game.id}
          onClick={onFolderClick}
          isSelected={selectedFolder === game.id}
        />
      ))}
    </group>
  );
}
