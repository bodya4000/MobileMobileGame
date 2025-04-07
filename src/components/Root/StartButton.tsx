import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const StartButton = () => {
	const {push} = useRouter()
	const animatedValue = useSharedValue(0);
	const onPressIn = () => {
		animatedValue.value = withTiming(1, { duration: 300 });
	};

	const onPress = () => {
		push('/game')
	}

	const onPressOut = () => {
		animatedValue.value = withTiming(0, { duration: 300 });
	};

	const animatedStyles = useAnimatedStyle(() => {
		const scale = interpolate(animatedValue.value, [0, 1], [1, 1.05]);
		const opacity = interpolate(animatedValue.value, [0, 1], [1, 0.9]);
		return { transform: [{ scale }], opacity };
	});

	return (
		<Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
			<Animated.View style={[styles.button, animatedStyles]}>
				<Text style={styles.text}>Start</Text>
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		marginTop: 100,
		top: 100,
		width: 150,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#6EBCF7',
		borderRadius: 15,
	},
	text: { fontWeight: 500, color: '#fff', fontSize: 18, textAlign: 'center' },
});

export default StartButton;
