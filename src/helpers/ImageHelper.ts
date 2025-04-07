import green from '@images/green.png';
import noodles from '@images/noodles.png';
import orange from '@images/orange.png';
import red from '@images/red.png';
import temple from '@images/temple.png';
import tiger from '@images/tiger.png';
import umbrella from '@images/umbrella.png';
import zeus from '@images/zeus.png';

import { MagicModels, ModelEnum, TigerModels, ZeusModels } from '@/constants/Models';

export const ModelImages: Record<number, any> = {
	// TigerModels
	[TigerModels.Tiger]: tiger,
	[TigerModels.Temple]: temple,
	[TigerModels.Umbrella]: umbrella,
	[TigerModels.Noodles]: noodles,

	// ZeusModels
	[ZeusModels.Zeus]: zeus,
	[ZeusModels.Temple]: temple, // 👈 Temple вже був, але ключі числові — дозволено

	// MagicModels
	[MagicModels.Green]: green,
	[MagicModels.Orange]: orange,
	[MagicModels.Red]: red,
};

import fallback from '@images/heart.png';

export const getImage = (model: ModelEnum) => {
	return ModelImages[model] ?? fallback;
};
