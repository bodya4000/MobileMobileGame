import { Header } from '@/components/Game';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const Rules = () => {
	return (
		<View style={styles.layout}>
			<Header />
			<LinearGradient
				colors={['#4E5DB2', '#6F89D4', '#4BAAF3']}
				locations={[0, 0.7, 1]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={styles.body}
			>
				<Text style={styles.title}>Rules</Text>
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet consectetur. A ut sit pellentesque vel. Sit tincidunt praesent
					adipiscing in magna erat enim nec urna. Aliquet volutpat id arcu fames varius mus
					ultricies mollis. Adipiscing blandit cursus faucibus vel ullamcorper dignissim at...
				</Text>
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
		alignItems: 'center',
		paddingTop: 50,
		paddingHorizontal: 15,
		gap: 30,
	},
	title: {
		color: '#fff',
		fontWeight: 800,
		fontSize: 20,
	},
	text: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 500,
		letterSpacing: 2
	},
});

export default Rules;
