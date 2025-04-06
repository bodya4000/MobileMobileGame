class ListHelper {
	getRandIdx(lst: any[]) {
		return Math.floor(Math.random() * lst.length);
	}

	removeByIdx(lst: any[], idx: number) {
		return lst.splice(idx, 1);
	}
}

export default new ListHelper();
