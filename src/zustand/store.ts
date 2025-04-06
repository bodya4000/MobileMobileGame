import { GameService } from '@/services';
import { Card } from '@/types/Card';
import { create } from 'zustand';

interface AppState {
  game: Card[][];
  currentCards: Card[];
  foundPairs: [Card, Card][];
  flipCard: (card: Card) => void;
}

const useAppState = create<AppState>((set, get) => ({
  game: GameService.initGame(),
  currentCards: [],
  foundPairs: [],

  flipCard: (card: Card) => {
    const { currentCards, foundPairs } = get();

    // Якщо вже 2 вибрано — ігноруємо
    if (currentCards.length === 2) return;

    // Якщо картка вже знайдена
    const isAlreadyFound = foundPairs.some(
      ([a, b]) =>
        (a.x === card.x && a.y === card.y) || (b.x === card.x && b.y === card.y)
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
        setTimeout(() => set({ currentCards: [] }), 1000); // flip back
      }
    } else {
      set({ currentCards: newSelected });
    }
  },
}));

export default useAppState;
