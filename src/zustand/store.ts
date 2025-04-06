import { GameService } from '@/services';
import { Card } from '@/types/Card';
import { create } from 'zustand';

interface AppState {
	game: Card[][];
	currentCards: Card[];
	foundPairs: [Card, Card][];
}

const useAppState = create<AppState>((set, get) => ({
	game: GameService.initGame(),
	currentCards: [],
	foundPairs: [],
}));

export default useAppState;
