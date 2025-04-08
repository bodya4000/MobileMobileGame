import { ModelImages } from '@/constants/LevelResouerces'
import { MagicModels, TigerModels, ZeusModels } from '@/constants/Models';
import { Image, StyleSheet } from 'react-native';

interface Props {
	model: TigerModels | ZeusModels | MagicModels;
}

const CardImgModel = ({model}:Props) => {
	const img = ModelImages[model]
	return <Image source={img} style={styles.image} resizeMode='cover' />;
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},
});

export default CardImgModel;
