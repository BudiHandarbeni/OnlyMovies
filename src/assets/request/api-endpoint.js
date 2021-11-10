import CONFIG from './CONFIG';

export const API_ENDPOINT = {
	recomendation: (page, movieId) =>
		`${CONFIG.BASE_URL}/movie/${movieId}/recommendations?api_key=${CONFIG.API_KEY}&language=en-US&page=${page}`,
	popular: (page) =>
		`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=en-US&page=${page}`,
	top_rated: (page) =>
		`${CONFIG.BASE_URL}/movie/top_rated?api_key=${CONFIG.API_KEY}&language=en-US&page=${page}`,
	now_playing: (page) =>
		`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=en-US&page=${page}`,
	trending: `${CONFIG.BASE_URL}/trending/movie/week?api_key=${CONFIG.API_KEY}`,
	search: (word) =>
		`${CONFIG.BASE_URL}/search/movie?api_key=${CONFIG.API_KEY}&language=en-US&query=${word}&page=1&include_adult=false`,
	image_low: (backdrop) => `${CONFIG.IMAGE_LOW}${backdrop}`,
	image_height: (backdrop) => `${CONFIG.IMAGE_HIGHT}${backdrop}`,
	detail: (movieId) =>
		`${CONFIG.BASE_URL}/movie/${movieId}?api_key=${CONFIG.API_KEY}&language=en-US`,
	genres: (genres, page) =>
		`${CONFIG.BASE_URL}/discover/movie?api_key=${CONFIG.API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genres}`,
	list_genres: `${CONFIG.BASE_URL}/genre/movie/list?api_key=${CONFIG.API_KEY}&language=en-US`,
};
