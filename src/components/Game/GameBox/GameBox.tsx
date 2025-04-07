import useAppState from '@/zustand/store';
import { useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardFlip from './CardFlip';

const GameBox = () => {
	const { game, currentCards, foundPairs, flipCard } = useAppState();
	const gameList = useMemo(() => game.flat(), [game]);

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
