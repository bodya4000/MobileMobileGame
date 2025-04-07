import useAppState from '@/zustand/store';
import { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardFlip from './CardFlip';

const GameBox = () => {
	const { game, foundPairs } = useAppState();
	const [won, setWon] = useState(false);
	const gameList = useMemo(() => game.flat(), [game]);

	useEffect(() => {
		if (foundPairs.length == gameList.length / 2) {
			alert('yuo won')
			setWon(true);
		}
	}, [gameList, foundPairs]);

	return (
		<View style={styles.layout}>
			<FlatList
				data={gameList}
				numColumns={2}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ marginTop: 50 }}
				renderItem={({ item }) => <CardFlip item={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default GameBox;
