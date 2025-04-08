import { Card } from '@/types/Card';
import useAppState from '@/zustand/store';
import { Image, Pressable, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { TigerModels } from '@/constants/Models';
import { useOpenAnimation, usePickCardAnimation } from '@/hooks';
import back from '@images/back.png';
import noodles from '@images/noodles.png';
import temple from '@images/temple.png';
import tiger from '@images/tiger.png';
import umbrella from '@images/umbrella.png';
import CardImgModel from './CardImgModel';

interface Props {
	item: Card;
}

const getImage = (model: TigerModels) => {
	switch (model) {
		case TigerModels.Tiger:
			return tiger;
		case TigerModels.Temple:
			return temple;
		case TigerModels.Umbrella:
			return umbrella;
		default:
			return noodles;
	}
};

const CardFlip = ({ item }: Props) => {
	const { flipCard } = useAppState();
	const rotation = useSharedValue(180);

	const { firstRendered } = useOpenAnimation({ rotation });
	usePickCardAnimation({ firstRendered, rotation, item });

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
		<Pressable style={[styles.cardContainer]} onPress={() => flipCard(item)}>
			<Animated.View style={[styles.card, frontStyle]}>
				<Image source={back} style={styles.image} resizeMode='cover' />
			</Animated.View>
			<Animated.View style={[styles.card, backStyle]}>
				<CardImgModel model={item.model} />
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		aspectRatio: 1,
		padding: 8,
		position: 'relative',
		zIndex: 10,
	},
	card: {
		position: 'absolute',
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
