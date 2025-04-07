import { Card } from '@/types/Card';
import useAppState from '@/zustand/store';
import { useEffect } from 'react';

const useWinCheck = ({ gameList }: { gameList: Card[] }) => {
	const { foundPairs, nextLevel, setWon } = useAppState();
	useEffect(() => {
		if (foundPairs.length == gameList.length / 2) {
			setWon(true);
			nextLevel();
		}
	}, [gameList, foundPairs]);
};

export default useWinCheck;
