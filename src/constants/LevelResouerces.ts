import { Models } from '@/constants/Models';

export type Resource = {
	rows: number;
	cols: number;
	models: Models[];
};

export const LevelResources: Record<number, Resource> = {
	1: {
		rows: 4,
		cols: 2,
		models: [Models.Tiger, Models.Temple, Models.Umbrella, Models.Noodles],
	},
	2: {
		rows: 4,
		cols: 3,
		models: [
			Models.Tiger,
			Models.Temple,
			Models.Umbrella,
			Models.Noodles,
			Models.Noodles,
			Models.Tiger,
		],
	},
};
