import { LevelResources } from '@/constants/LevelResouerces';
import { useNextLevel, useWinCheck } from '@/hooks';
import useAppState from '@/zustand/store';
import { useMemo } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import CardFlip from './CardFlip';

const screenWidth = Dimensions.get('window').width;

const GameBox = () => {
	const { game, level } = useAppState();
	const gameList = useMemo(() => game.flat(), [game]);

	const { cols, rows } = LevelResources[level];
	const spacing = 10;
	const totalSpacing = spacing * (cols + 1);
	const cardWidth = (screenWidth - totalSpacing) / ((cols+rows)/2);

	useWinCheck({ gameList });
	useNextLevel();

	return (
		<View style={styles.layout}>
			<FlatList
				key={`grid-cols-${cols}`}
				data={gameList}
				numColumns={cols}
				scrollEnabled={false}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'center',
					alignItems: 'center',
					padding: spacing,
				}}
				columnWrapperStyle={{ gap: spacing }}
				renderItem={({ item }) => (
					<View style={{ width: cardWidth, aspectRatio: 1 }}>
						<CardFlip item={item} />
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
	},
});

export default GameBox;
