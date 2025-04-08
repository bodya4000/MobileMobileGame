import { LevelResources } from '@/constants/LevelResouerces';
import { ListHelper } from '@/helpers';
import { Card } from '@/types/Card';

class GameService {
	initGame(level: number): Card[][] {
		const resource = LevelResources[level];
		if (!resource) throw new Error(`Level ${level} not found`);

		const { rows, cols, models } = resource;
		const modelList = [...models, ...models];

		const game: Card[][] = [];
		for (let i = 0; i < rows; i++) {
			game[i] = [];
			for (let j = 0; j < cols; j++) {
				const randIdx = ListHelper.getRandIdx(modelList);
				const model = modelList[randIdx];
				ListHelper.removeByIdx(modelList, randIdx);
				game[i][j] = { x: i, y: j, model };
			}
		}
		return game;
	}
}

export default new GameService();
