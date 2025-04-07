import { Card } from '@/types/Card';
import useAppState from '@/zustand/store';
import { useEffect } from 'react';
import { SharedValue, withTiming } from 'react-native-reanimated';

interface Props {
	rotation: SharedValue<number>;
	firstRendered: boolean;
	item: Card;
}

const usePickCardAnimation = ({ firstRendered, rotation, item }: Props) => {
	const { currentCards, foundPairs } = useAppState();

	const isCardVisible = (card: Card) => {
		const isCurrent = currentCards.some(c => c.x === card.x && c.y === card.y);
		const isFound = foundPairs.some(
			([a, b]) => (a.x === card.x && a.y === card.y) || (b.x === card.x && b.y === card.y)
		);
		return isCurrent || isFound;
	};

	useEffect(() => {
		if (firstRendered) {
			const isVisible = isCardVisible(item);
			rotation.value = withTiming(isVisible ? 180 : 0, { duration: 300 });
		}
	}, [currentCards, foundPairs, firstRendered]);
};

export default usePickCardAnimation;
