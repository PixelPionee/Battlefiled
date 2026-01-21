import type { Game } from '../../tipos/battlefield.types';

interface GameInfoProps {
  game: Game;
}

export default function GameInfo({ game }: GameInfoProps) {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Galeria de Imagens */}
      <section>
        <h2 className="text-2xl font-bold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">
          GALERIA DE IMAGENS
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {game.images.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-orange-500 transition-all">
              <img
                src={img}
                alt={`${game.title} - Imagem ${idx + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Resumo */}
      <section>
        <h2 className="text-2xl font-bold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">
          RESUMO DA OPERAÇÃO
        </h2>
        <p className="text-lg leading-relaxed bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
          {game.resumo}
        </p>
      </section>

      {/* Personagens e Armamentos lado a lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personagens */}
        <section>
          <h2 className="text-2xl font-bold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">
            PESSOAL ENVOLVIDO
          </h2>
          <ul className="space-y-2">
            {game.personagens.map((personagem, idx) => (
              <li
                key={idx}
                className="bg-gray-800/50 p-3 rounded border-l-4 border-blue-500 hover:bg-gray-700/50 transition-colors"
              >
                {personagem}
              </li>
            ))}
          </ul>
        </section>

        {/* Armamentos */}
        <section>
          <h2 className="text-2xl font-bold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">
            ARSENAL DISPONÍVEL
          </h2>
          <div className="space-y-2">
            {game.armamentos.map((arma, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 p-3 rounded border-l-4 border-red-500 hover:bg-gray-700/50 transition-colors"
              >
                {arma}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Missões */}
      <section>
        <h2 className="text-2xl font-bold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">
          MISSÕES PRINCIPAIS
        </h2>
        <ul className="space-y-3">
          {game.missoes.map((missao, idx) => (
            <li
              key={idx}
              className="bg-gray-800/50 p-4 rounded border-l-4 border-green-500 hover:bg-gray-700/50 transition-colors"
            >
              <span className="font-bold text-orange-400">Missão {idx + 1}:</span> {missao}
            </li>
          ))}
        </ul>
      </section>

      {/* Resultado e Recepção */}
      <section>
        <h2 className="text-2xl font-bold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">
          ANÁLISE E RESULTADOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-900/30 p-4 rounded border-l-4 border-green-500">
            <strong className="text-green-400 block mb-2">Recepção:</strong>
            <p>{game.resultado.recepcao}</p>
          </div>
          <div className="bg-blue-900/30 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-blue-400 block mb-2">Pontos Fortes:</strong>
            <p>{game.resultado.pontos_fortes}</p>
          </div>
          <div className="bg-red-900/30 p-4 rounded border-l-4 border-red-500">
            <strong className="text-red-400 block mb-2">Pontos Fracos:</strong>
            <p>{game.resultado.pontos_fracos}</p>
          </div>
          <div className="bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
            <strong className="text-yellow-400 block mb-2">Vendas:</strong>
            <p>{game.resultado.vendas}</p>
          </div>
          {game.resultado.legado && (
            <div className="md:col-span-2 bg-purple-900/30 p-4 rounded border-l-4 border-purple-500">
              <strong className="text-purple-400 block mb-2">Legado:</strong>
              <p>{game.resultado.legado}</p>
            </div>
          )}
          {game.resultado.curiosidade && (
            <div className="md:col-span-2 bg-orange-900/30 p-4 rounded border-l-4 border-orange-500">
              <strong className="text-orange-400 block mb-2">Curiosidade:</strong>
              <p>{game.resultado.curiosidade}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
