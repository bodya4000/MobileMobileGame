import useAppState from '@/zustand/store';
import { useEffect, useState } from 'react';
import { SharedValue, withTiming } from 'react-native-reanimated';

interface Props {
	rotation: SharedValue<number>;
}

const useOpenAnimation = ({ rotation }: Props) => {
	const { game } = useAppState();
	const [firstRendered, setFirstRendered] = useState(false);

	useEffect(() => {
		if (!firstRendered) {
			setTimeout(() => {
				rotation.value = withTiming(0, { duration: 300 });
				setFirstRendered(true);
			}, 1000);
		}
	}, [firstRendered, game]);

	return { firstRendered };
};

export default useOpenAnimation;
