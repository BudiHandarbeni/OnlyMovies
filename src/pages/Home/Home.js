import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../../assets/request/api-endpoint';
import { loading as Loading, card as Card } from '../../utils/index';

function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(API_ENDPOINT.trending)
			.then((resp) => resp.data)
			.then((result) => setMovies(result.results));
	}, []);

	return (
		<React.Fragment>
			{movies.length > 0 ? (
				<section className="mx-4 mt-4 ">
					<h2 className="mb-4 text-2xl font-bold text-font">What's Trending</h2>
					<Card result={movies} />
				</section>
			) : (
				<Loading size={8} postion="absolute" />
			)}
		</React.Fragment>
	);
}

export default Home;
