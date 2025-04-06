import { LogLevel, OneSignal } from 'react-native-onesignal';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);

OneSignal.initialize('ONESIGNAL_APP_ID');

OneSignal.Notifications.requestPermission(true);

OneSignal.Notifications.addEventListener('click', event => {
	console.log('OneSignal: notification clicked:', event);
});
