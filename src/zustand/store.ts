import { GameService } from '@/services';
import { Card } from '@/types/Card';
import { create } from 'zustand';

interface AppState {
	level: number;
	game: Card[][];
	currentCards: Card[];
	foundPairs: [Card, Card][];
	won: boolean;

	nextLevel: () => void;
	setWon: (value: boolean) => void;
	flipCard: (card: Card) => void;
}

const useAppState = create<AppState>((set, get) => ({
	level: 1,
	game: GameService.initGame(1),
	currentCards: [],
	foundPairs: [],
	won: false,

	checkIfWon: () => {},

	setWon: (value: boolean) => {
		set({ won: value });
	},

	nextLevel: () => {
		set({
			game: GameService.initGame(get().level + 1),
			level: get().level + 1,
			currentCards: [],
			foundPairs: [],
		});
	},

	flipCard: (card: Card) => {
		const { currentCards, foundPairs } = get();

		if (currentCards.length === 2) return;

		const isAlreadyFound = foundPairs.some(
			([a, b]) => (a.x === card.x && a.y === card.y) || (b.x === card.x && b.y === card.y)
		);
		if (isAlreadyFound) return;

		const newSelected = [...currentCards, card];

		if (newSelected.length === 2) {
			const [first, second] = newSelected;
			const isMatch = first.model === second.model;

			if (isMatch) {
				set({
					currentCards: [],
					foundPairs: [...foundPairs, [first, second]],
				});
			} else {
				set({ currentCards: newSelected });
				setTimeout(() => set({ currentCards: [] }), 1000);
			}
		} else {
			set({ currentCards: newSelected });
		}
	},
}));

export default useAppState;
