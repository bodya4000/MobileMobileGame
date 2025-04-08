import green from '@images/magic/green.png';
import orange from '@images/magic/orange.png';
import red from '@images/magic/red.png';
import magicBg from '@images/magic/bg.png'

import noodles from '@images/tiger/noodles.png';
import temple from '@images/tiger/temple.png';
import tiger from '@images/tiger/tiger.png';
import umbrella from '@images/tiger/umbrella.png';
import tigerBg from '@images/tiger/bg.png'


import zeusTemple from '@images/zeus/temple.png';
import zeus from '@images/zeus/zeus.png';
import zeusBg from '@images/zeus/bg.png'


import { MagicModels, TigerModels, ZeusModels } from './Models';

export const ModelImages: Record<number, any> = {
	[TigerModels.Tiger]: tiger,
	[TigerModels.Temple]: temple,
	[TigerModels.Umbrella]: umbrella,
	[TigerModels.Noodles]: noodles,

	[ZeusModels.Zeus]: zeus,
	[ZeusModels.Temple]: zeusTemple,

	[MagicModels.Green]: green,
	[MagicModels.Orange]: orange,
	[MagicModels.Red]: red,
};

export type Resource = {
	bg:number,
	rows: number;
	cols: number;
	models: TigerModels[] | ZeusModels[] | MagicModels[];
};

export const LevelResources: Record<number, Resource> = {
	1: {
		bg: tigerBg,
		rows: 4,
		cols: 2,
		models: [TigerModels.Tiger, TigerModels.Temple, TigerModels.Umbrella, TigerModels.Noodles],
	},
	2: {
		bg: magicBg,

		rows: 4,
		cols: 3,
		models: [
			MagicModels.Green,
			MagicModels.Red,
			MagicModels.Orange,
			MagicModels.Green,
			MagicModels.Red,
			MagicModels.Orange,
		],
	},
	3: {
		bg: zeusBg,
		rows: 2,
		cols: 2,
		models: [ZeusModels.Zeus, ZeusModels.Temple],
	},
};

