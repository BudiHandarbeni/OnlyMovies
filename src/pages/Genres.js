import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_ENDPOINT } from '../assets/request/api-endpoint';
import Card from '../utils/Card';
import Loading from '../utils/loading';

export default function Genres() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState({
		card: true,
		button: false,
	});

	const typeGenres = useLocation().search;
	const type = new URLSearchParams(typeGenres).get('type');

	useEffect(() => {
		axios
			.get(API_ENDPOINT.genres(type))
			.then((resp) => resp.data)
			.then((data) => {
				setMovies(data.results);
				setLoading({ card: false });
			});
		return () => {
			setLoading({ card: true });
			setPage(1);
		};
	}, [type]);

	useEffect(() => {
		axios
			.get(API_ENDPOINT.genres(type, page))
			.then((resp) => resp.data)
			.then((data) => {
				const push = [...movies, ...data.results];
				setMovies(push);
				setLoading({ button: false });
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	if (loading.card) {
		return <Loading postion="absolute" size={8} />;
	}
	return (
		<section className="mx-4 mt-4 flex flex-col justify-center items-center space-y-4">
			<Card result={movies} />
			{loading.button ? (
				<div className="my-auto w-7">
					<Loading size={6} postion="block" />
				</div>
			) : (
				<button
					className="my-8 h-8 md:h-20 w-full bg-darks flex justify-center items-center space-x-2 font-bold rounded-lg"
					onClick={() => {
						setLoading({ button: true });
						setPage(page + 1);
					}}
				>
					Load More
				</button>
			)}
		</section>
	);
}
