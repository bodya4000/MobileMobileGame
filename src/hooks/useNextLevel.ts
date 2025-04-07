import useAppState from '@/zustand/store';
import { useEffect } from 'react';

const useNextLevel = () => {
	const { won, nextLevel } = useAppState();

	useEffect(() => {
		if (won) {
			nextLevel();
		}
	}, []);
};

export default useNextLevel;
