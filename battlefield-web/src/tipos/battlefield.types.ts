export interface Game {
  id: string;
  title: string;
  folder: string;
  images: string[];
  resumo: string;
  personagens: string[];
  armamentos: string[];
  missoes: string[];
  resultado: {
    recepcao: string;
    pontos_fortes: string;
    pontos_fracos: string;
    vendas: string;
    legado?: string;
    curiosidade?: string;
  };
}

export interface BattlefieldData {
  games: Game[];
}