import { Models } from '@/constants/Models';
import { Card } from '@/types/Card';
import useAppState from '@/zustand/store';
import { Image, Pressable, StyleSheet } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import back from '@images/back.png';
import noodles from '@images/noodles.png';
import temple from '@images/temple.png';
import tiger from '@images/tiger.png';
import umbrella from '@images/umbrella.png';

interface Props {
	item: Card;
}
const getImage = (model: Models) => {
	switch (model) {
		case Models.Tiger:
			return tiger;
		case Models.Temple:
			return temple;
		case Models.Umbrella:
			return umbrella;
		default:
			return noodles;
	}
};

const CardFlip = ({ item }: Props) => {
	const { currentCards, foundPairs, flipCard } = useAppState();

	const isCardVisible = (card: any) => {
		const isCurrent = currentCards.some(c => c.x === card.x && c.y === card.y);
		const isFound = foundPairs.some(
			([a, b]) => (a.x === card.x && a.y === card.y) || (b.x === card.x && b.y === card.y)
		);
		return isCurrent || isFound;
	};

	const isVisible = isCardVisible(item);
	const rotation = useSharedValue(180);

	if (isVisible) {
		rotation.value = withTiming(180, { duration: 300 });
	} else {
		setTimeout(() => {
			rotation.value = withTiming(0, { duration: 400 });
		}, 1000);
	}

	const frontStyle = useAnimatedStyle(() => {
		const rotateY = interpolate(rotation.value, [0, 180], [0, 180]);
		return {
			transform: [{ rotateY: `${rotateY}deg` }],
			backfaceVisibility: 'hidden',
			opacity: rotation.value < 90 ? 1 : 0,
		};
	});

	const backStyle = useAnimatedStyle(() => {
		const rotateY = interpolate(rotation.value, [0, 180], [180, 360]);
		return {
			transform: [{ rotateY: `${rotateY}deg` }],
			backfaceVisibility: 'hidden',
			opacity: rotation.value >= 90 ? 1 : 0,
		};
	});

	return (
		<Pressable style={styles.cardContainer} onPress={() => flipCard(item)}>
			<Animated.View style={[styles.card, frontStyle]}>
				<Image source={back} style={styles.image} resizeMode='cover' />
			</Animated.View>
			<Animated.View style={[styles.card, backStyle]}>
				<Image source={getImage(item.model)} style={styles.image} resizeMode='cover' />
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flexBasis: 150,
		justifyContent: 'center',
		alignItems: 'center',
		aspectRatio: 1,
		padding: 8,
		position: 'relative',
		zIndex: 10,
	},
	card: {
		position: 'absolute',
		zIndex: 100,
		width: '100%',
		height: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},
});

export default CardFlip;
