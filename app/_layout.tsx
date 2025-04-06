import { Stack } from 'expo-router';
import { LogBox } from 'react-native';

export default function RootLayout() {
	LogBox.ignoreAllLogs();
	return (
		<Stack>
			<Stack.Screen options={{ headerShown: false }} name='index' />
		</Stack>
	);
}
