import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
	apiKey: 'AIzaSyD-F4K3-fake-key-1234567890abcdefg',
	authDomain: 'your-app-id.firebaseapp.com',
	projectId: 'your-app-id',
	storageBucket: 'your-app-id.appspot.com',
	messagingSenderId: '123456789012',
	appId: '1:123456789012:web:abcdef12345678',
	measurementId: 'G-FAKE12345',
};

export const app = initializeApp(firebaseConfig);
