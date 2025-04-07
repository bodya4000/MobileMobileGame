export enum TigerModels {
	Tiger,
	Temple,
	Umbrella,
	Noodles,
}

export enum ZeusModels {
	Zeus,
	Temple,
}

export enum MagicModels {
	Green,
	Orange,
	Red,
}
export type ModelEnum = typeof TigerModels | typeof ZeusModels | typeof MagicModels;
