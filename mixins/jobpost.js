export const jobpost = {
	methods: {
		__fnComputeFavorite(dataName) {
			if (this[dataName]) {
				return this[dataName]
					.filter((item) => item.favorite.length)
					.map((item) => item.favorite)
					.reduce((prv, cur) => [...prv, ...cur]);
			} else {
				return [];
			}
		},
	}
}