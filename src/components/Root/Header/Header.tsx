import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
	const insets = useSafeAreaInsets();
	const paddingTop = insets.top;
	return (
		<View style={[{ height: paddingTop + 50 }]}>
			<LinearGradient
				colors={['#43BCF0', '#4E5DB2', '#4F54AC', '#571280']}
				locations={[0, 0.56, 0.61, 1]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={styles.header}
			></LinearGradient>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		flex: 1,
	},
});
