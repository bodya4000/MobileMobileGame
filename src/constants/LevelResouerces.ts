import { TigerModels } from './Models';

export type Resource = {
	rows: number;
	cols: number;
	TigerModels: TigerModels[];
};

export const LevelResources: Record<number, Resource> = {
	1: {
		rows: 4,
		cols: 2,
		TigerModels: [TigerModels.Tiger, TigerModels.Temple, TigerModels.Umbrella, TigerModels.Noodles],
	},
	2: {
		rows: 4,
		cols: 3,
		TigerModels: [
			TigerModels.Tiger,
			TigerModels.Temple,
			TigerModels.Umbrella,
			TigerModels.Noodles,
			TigerModels.Noodles,
			TigerModels.Tiger,
		],
	},
	3: {
		rows: 2,
		cols: 2,
		TigerModels: [
			TigerModels.Tiger,
			TigerModels.Temple,
			TigerModels.Umbrella,
			TigerModels.Noodles,
			TigerModels.Noodles,
			TigerModels.Tiger,
		],
	},
};
