export enum TigerModels {
	Tiger = 10,
	Temple = 11,
	Umbrella = 12,
	Noodles = 13,
}

export enum ZeusModels {
	Zeus = 20,
	Temple = 21,
}

export enum MagicModels {
	Green = 30,
	Orange = 31,
	Red = 32,
}

export type ModelEnum = typeof TigerModels | typeof ZeusModels | typeof MagicModels;
