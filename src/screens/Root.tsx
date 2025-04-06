import { Header } from '@/components/Root';
import GameBox from '@/components/Root/GameBox/GameBox';
import { GameService } from '@/services';
import bg from '@images/Game_tiger.png';
import { Image, StatusBar, StyleSheet, View } from 'react-native';

export default function Root() {
	const game = GameService.initGame();
	console.log(game);

	return (
		<View style={[styles.layout]}>
			<StatusBar barStyle={'light-content'} />

			<Image source={bg} style={styles.bg}></Image>
			<Header />
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
