import { Header } from '@/components'
import GameBox from '@/components/Game/GameBox/GameBox';
import { GameService } from '@/services';
import bg from '@images/Game_tiger.png';
import { Image, StatusBar, StyleSheet, View } from 'react-native';

export default function Game() {
	return (
		<View style={[styles.layout]}>
			<StatusBar barStyle={'light-content'} />

			<Image source={bg} style={styles.bg}></Image>
			<Header back heart points/>
			<GameBox />
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
