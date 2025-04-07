import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

interface WinModalProps {
	visible: boolean;
	onHome: () => void;
	onNext: () => void;
}

const WinModal = ({ visible, onHome, onNext }: WinModalProps) => {
	return (
		<Modal visible={visible} transparent animationType='fade'>
			<View style={styles.overlay}>
				<View style={styles.content}>
					<LinearGradient
						colors={['#4E9BE6', '#7F6AD3']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={styles.modal}
					>
						<LinearGradient
							colors={['#7C1FA0', '#350472']}
							style={styles.winButton}
						>
							<Text style={styles.winText}>YOU WON!</Text>
						</LinearGradient>
					</LinearGradient>

					<View style={styles.actions}>
						<Pressable style={styles.iconButton} onPress={onHome}>
							<Ionicons name='home' size={28} color='#fff' />
						</Pressable>
						<Pressable style={styles.iconButton} onPress={onNext}>
							<Ionicons name='arrow-forward' size={28} color='#fff' />
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		alignItems: 'center',
	},
	modal: {
		width: 300,
		padding: 24,
		borderRadius: 24,
		borderWidth: 4,
		borderColor: '#fff',
		alignItems: 'center',
	},
	winButton: {
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 20,
		marginBottom: 10,
	},
	winText: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	actions: {
		flexDirection: 'row',
		gap: 20,
		marginTop: 16,
		justifyContent: 'center',
	},
	iconButton: {
		backgroundColor: '#6DB4F7',
		borderRadius: 50,
		padding: 14,
		borderWidth: 3,
		borderColor: '#673AB7',
	},
});

export default WinModal;
