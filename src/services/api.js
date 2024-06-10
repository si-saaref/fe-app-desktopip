const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_KEY;
const MOVIE_BASE_URL = import.meta.env.VITE_MOVIE_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;
const DEF_LANG = import.meta.env.VITE_DEFAULT_LANGUAGE;

export const registerUser = async (data) => {
	const response = await fetch(`${BASE_URL}/api/v1/auth/register`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};

export const loginUser = async (data) => {
	const response = await fetch(`${BASE_URL}/api/v1/auth/signin`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};

export const getListMovieBanner = async () => {
	const response = await fetch(
		`${MOVIE_BASE_URL}movie/now_playing?api_key=${API_KEY}&language=${DEF_LANG}&page=1`
	);
	const listMovie = await response.json();
	return listMovie.results
		.map((movie) => ({
			...movie,
			image_thumbnail: `${BASE_IMAGE_URL + movie.poster_path}`,
		}))
		.slice(0, 5);
};

export const getListMiniMovie = async () => {
	const response = await fetch(
		`${MOVIE_BASE_URL}movie/upcoming?api_key=${API_KEY}&language=${DEF_LANG}&page=1`
	);
	const listMovie = await response.json();
	return listMovie.results.map((movie) => ({
		...movie,
		image_thumbnail: `${BASE_IMAGE_URL + movie.poster_path}`,
	}));
	// .slice(0, 5);
};
