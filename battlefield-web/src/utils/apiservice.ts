import type { BattlefieldData } from '../tipos/battlefield.types';

export async function getBattlefieldData(): Promise<BattlefieldData> {
  try {
    const response = await fetch('/api/battlefieldData.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: BattlefieldData = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao carregar dados da API:', error);
    throw new Error('Não foi possível carregar os dados dos jogos');
  }
}