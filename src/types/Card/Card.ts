import { Models } from '@/constants/Models';

export interface Card {
	readonly y: number;
	readonly x: number;
	readonly model: Models;
}
