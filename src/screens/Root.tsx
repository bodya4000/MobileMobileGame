import { Header } from '@/components';
import StartButton from '@/components/Root/StartButton';
import logo from '@images/logo-big.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from 'react-native';

const Root = () => {
	return (
		<View style={styles.layout}>
			<Header info/>
			<LinearGradient
				colors={['#4A8CD6', '#4E5DB2', '#5A3BA3', '#541896', '#66127E', '#711280']}
				locations={[0, 0.15, 0.35, 0.5, 0.8, 1]}
				start={{ x: 1, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={styles.body}
			>
				<Image source={logo} />

				<StartButton />
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Root;
