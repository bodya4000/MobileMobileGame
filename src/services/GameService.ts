import { Models } from '@/constants/Models';
import { ListHelper } from '@/helpers';
import { Card } from '@/types/Card';

class GameService {
	private readonly ROW_LENGTH = 2;
	private readonly COL_LENGTH = 4;
	private readonly MODELS_LIST = [
		Models.Tiger,
		Models.Tiger,
		Models.Temple,
		Models.Temple,
		Models.Umbrella,
		Models.Umbrella,
		Models.Noodles,
		Models.Noodles,
	];
	initGame() {
		const modelList = [...this.MODELS_LIST];
		const game: Card[][] = [];

		for (let i = 0; i < this.ROW_LENGTH; i++) {
			game[i] = [];
			for (let j = 0; j < this.COL_LENGTH; j++) {
				const randIdx = ListHelper.getRandIdx(modelList);
				const model = modelList[randIdx];
				ListHelper.removeByIdx(modelList, randIdx);
				game[i][j] = {
					x: i,
					y: j,
					model,
				};
			}
		}
		return game;
	}
}

export default new GameService();
