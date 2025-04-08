import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAppState from '@/zustand/store';
import arrowImg from '@images/back-arrow.png';
import heartImg from '@images/heart.png';
import infoImg from '@images/info.png';
import logoImg from '@images/logo-small.png';
import { useRouter } from 'expo-router';

interface Props {
	back?: boolean;
	heart?: boolean;
	logo?: boolean;
	info?: boolean;
	points?: boolean;

	firstEmpty?: boolean;
	secondEmpty?: boolean;
	thirdEmpty?: boolean;
}

const Header = ({ back, heart, logo, info, points, thirdEmpty }: Props) => {
	const { back: goBack, push } = useRouter();
	const { level } = useAppState();
	const insets = useSafeAreaInsets();
	const paddingTop = insets.top;
	return (
		<View style={[{ height: paddingTop + 60 }]}>
			<LinearGradient
				colors={['#4E5DB2', '#4F54AC', '#571280']}
				locations={[0, 0.56, 1]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={styles.layout}
			>
				<View style={[styles.body, { paddingTop }]}>
					{back && (
						<TouchableOpacity onPress={() => goBack()}>
							<Image style={styles.header_item} resizeMode='contain' source={arrowImg} />
						</TouchableOpacity>
					)}

					{heart && (
						<TouchableOpacity>
							<Image style={styles.header_item} resizeMode='contain' source={heartImg} />
						</TouchableOpacity>
					)}

					{logo && <Image style={styles.logo} resizeMode='contain' source={logoImg} />}

					{info && (
						<TouchableOpacity onPress={() => push('/rules')}>
							<Image style={styles.header_item} resizeMode='contain' source={infoImg} />
						</TouchableOpacity>
					)}

					{points && (
						<TouchableOpacity>
							<LinearGradient
								colors={['#00FFB2', '#24BFC9']}
								locations={[0, 1]}
								start={{ x: 0, y: 0 }}
								end={{ x: 0, y: 1 }}
								style={[styles.header_item, styles.points]}
							>
								<Text style={styles.points_text}>{level}/3</Text>
							</LinearGradient>
						</TouchableOpacity>
					)}

					{thirdEmpty && <TouchableOpacity style={styles.header_item} />}
				</View>
			</LinearGradient>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	layout: {
		flex: 1,
	},
	body: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	header_item: {
		width: 42,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	points: {
		height: 35,
		width: 50,
		paddingHorizontal: 10,
		borderRadius: 15,
	},

	points_text: {
		color: '#fff',
	},

	logo: {},
});
