import { useState, Suspense } from 'react';
import { useGameData } from './hooks/useGameData';
import Scene from './components/Menu3D/Scene';
import FolderPage from './components/FolderContent/FolderPage';
import LoadingScreen from './components/UI/LoadingScreen';
import './estilos/App.css';

function App() {
  const { games, loading, error, getGameById } = useGameData();
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

  const handleFolderClick = (gameId: string) => {
    setSelectedGameId(gameId);
  };

  const handleCloseFolderPage = () => {
    setSelectedGameId(null);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-2xl text-red-500 mb-2">ERRO AO CARREGAR ARQUIVOS</div>
          <div className="text-gray-400">{error}</div>
        </div>
      </div>
    );
  }

  const selectedGame = selectedGameId ? getGameById(selectedGameId) : null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Aviso para desktop apenas */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/80 px-6 py-3 rounded-lg border border-orange-500">
        <p className="text-orange-400 text-sm font-bold tracking-wider">
          ⚠️ ESTE SITE É OTIMIZADO APENAS PARA DESKTOP
        </p>
      </div>

      {/* Menu 3D Cinematográfico */}
      <Suspense fallback={<LoadingScreen />}>
        <Scene
          games={games}
          onFolderClick={handleFolderClick}
          selectedFolder={selectedGameId}
        />
      </Suspense>

      {/* Overlay com conteúdo da pasta quando selecionada */}
      {selectedGame && (
        <FolderPage
          game={selectedGame}
          onClose={handleCloseFolderPage}
        />
      )}

      {/* Instruções de uso */}
      {!selectedGameId && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <p className="text-white text-lg font-bold tracking-wider mb-2 drop-shadow-lg">
            CLIQUE EM UMA PASTA PARA ABRIR O ARQUIVO
          </p>
          <p className="text-gray-400 text-sm drop-shadow-lg">
            Use o mouse para interagir com as pastas
          </p>
        </div>
      )}

      {/* Rodapé */}
      <div className="absolute bottom-4 right-4 z-10 text-right">
        <p className="text-gray-500 text-xs">
          © 2025 Battlefield Archive
        </p>
        <p className="text-gray-600 text-xs">
          Um projeto de fã para fãs
        </p>
      </div>
    </div>
  );
}

export default App;
