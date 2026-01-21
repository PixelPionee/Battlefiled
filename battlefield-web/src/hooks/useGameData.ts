import { useState, useEffect } from 'react';
import { getBattlefieldData } from '../utils/apiservice';
import type { Game, BattlefieldData } from '../tipos/battlefield.types';

export function useGameData() {
  const [data, setData] = useState<BattlefieldData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBattlefieldData()
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const getGameById = (id: string): Game | undefined => {
    return data?.games.find(game => game.id === id);
  };

  return {
    data,
    games: data?.games || [],
    loading,
    error,
    getGameById
  };
}
