import { TigerModels } from '@/constants/TigerModels';

export interface Card {
	readonly y: number;
	readonly x: number;
	readonly model: TigerModels;
}
