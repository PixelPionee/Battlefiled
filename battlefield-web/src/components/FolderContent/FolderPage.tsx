import { motion, AnimatePresence } from 'framer-motion';
import type { Game } from '../../tipos/battlefield.types';
import GameInfo from './GameInfo';

interface FolderPageProps {
  game: Game | null;
  onClose: () => void;
}

export default function FolderPage({ game, onClose }: FolderPageProps) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 90 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-[90%] max-w-4xl h-[85vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #2a2a2a, #1a1a1a)',
            border: '2px solid #4a4a4a'
          }}
        >
          {/* Cabeçalho estilo dossiê militar */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 border-b-4 border-black">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-200 tracking-widest mb-1">
                  ARQUIVO CLASSIFICADO
                </p>
                <h1 className="text-4xl font-bold text-white tracking-wider">
                  {game.title.toUpperCase()}
                </h1>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-red-300 transition-colors text-3xl font-bold px-4"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Conteúdo do dossiê */}
          <div className="overflow-y-auto h-[calc(100%-120px)] p-8">
            <GameInfo game={game} />
          </div>

          {/* Rodapé */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 border-t border-gray-700">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>DOCUMENTO #{game.id.toUpperCase()}</span>
              <span>NÍVEL DE ACESSO: PÚBLICO</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
