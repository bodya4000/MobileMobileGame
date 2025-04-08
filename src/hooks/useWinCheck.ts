import { Card } from '@/types/Card';
import useAppState from '@/zustand/store';
import { useEffect } from 'react';

const useWinCheck = ({ gameList }: { gameList: Card[] }) => {
	const { foundPairs, setWon } = useAppState();
	useEffect(() => {
		if (foundPairs.length == gameList.length / 2) {
			setWon(true);
		}
	}, [gameList, foundPairs]);
};

export default useWinCheck;
