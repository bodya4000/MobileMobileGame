import { Game } from '@/screens';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function GameScreen() {
	const [locationInUA, setLocationInUA] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();

			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				setLocationInUA(false);
				return;
			}

			const currentLocation = await Location.getCurrentPositionAsync({});
			const { latitude, longitude } = currentLocation.coords;
			const geo = await Location.reverseGeocodeAsync({ latitude, longitude });
			console.log(geo);
			if (geo[0]?.isoCountryCode === 'UA') {
				setLocationInUA(true);
			}
			setLocationInUA(false);
		})();
	}, []);
	

	if (!locationInUA) {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<WebView source={{ uri: 'https://en.wikipedia.org/wiki/React_Native' }} />
			</SafeAreaView>
		);
	}
	return <Game />;
}
