import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import arrow from '@images/back-arrow.png';
import heart from '@images/heart.png';
import info from '@images/info.png';
import { useRouter } from 'expo-router';

const Header = () => {
	const { back, push } = useRouter();
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
					<TouchableOpacity onPress={() => back()}>
						<Image style={styles.header_item} resizeMode='contain' source={arrow} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.header_item} resizeMode='contain' source={heart} />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => push('/rules')}>
						<Image style={styles.header_item} resizeMode='contain' source={info} />
					</TouchableOpacity>

					<TouchableOpacity>
						<LinearGradient
							colors={['#00FFB2', '#24BFC9']}
							locations={[0, 1]}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							style={[styles.header_item, styles.points]}
						>
							<Text style={styles.points_text}>2/8</Text>
						</LinearGradient>
					</TouchableOpacity>
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
});
