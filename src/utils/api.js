//get options
const getOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export const api = {
	async getNowPlaying() {
		const nowPlaying = await fetch(
			'https://api.themoviedb.org/3/movie/now_playing?language=en-US',
			getOptions,
			{ next: { revalidate: 3600 } },
		);
		return nowPlaying.json();
	},
	async getPopularMovies() {
		const popularMovies = await fetch(
			'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
			getOptions,
		);
		return popularMovies.json();
	},
	async getTrendingMovies() {
		const trendingMovies = await fetch(
			'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
			getOptions,
		);
		return trendingMovies.json();
	},
	async getUpcomingMovies() {
		const upcomingMovies = await fetch(
			'https://api.themoviedb.org/3/movie/upcoming?language=en-US',
			getOptions,
		);
		return upcomingMovies.json();
	},
	async getMovieDetails(movieId) {
		const detail = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
			getOptions,
		);
		return detail.json();
	},
	async getMovieCredits(movieId) {
		const credits = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
			getOptions,
		);
		return credits.json();
	},
};
