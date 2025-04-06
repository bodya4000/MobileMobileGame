import { Header } from '@/components';
import { Image, StyleSheet, View } from 'react-native';

export default function Root() {
	return (
		<View style={[styles.layout]}>
			<Image source={require('../assets/images/Game_tiger.png')} style={styles.bg}></Image>

			<Header />
		</View>
	);
}

const styles = StyleSheet.create({
	layout: {
		position: 'relative',
		flex: 1,
	},
	bg: {
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
		zIndex: -1,
	},
});
