import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../assets/request/api-endpoint';

import SearchResult from '../utils/SearchResult';

function Input() {
	const [movies, setMovies] = useState({});
	const [word, setWord] = useState('');
	const [show, setShow] = useState(false);

	useEffect(() => {
		const searchMovie = async () => {
			await fetch(API_ENDPOINT.search(word))
				.then((res) => res.json())
				.then((resJson) => resJson.results)
				.then((reslt) =>
					reslt.filter((value) =>
						value.title.toLowerCase().includes(word.toLowerCase())
					)
				)
				.then((res) => setMovies(res));
		};
		if (word.length > 0) {
			setShow(true);
			searchMovie();
		}

		return () => setShow(false);
	}, [word]);
	const handleChange = (w) => setWord(w.target.value);

	return (
		<div className="relative w-full h-full">
			<input
				type="text"
				placeholder="Search Movie"
				value={word}
				className="h-full bg-transparent md:text-xs focus:outline-none w-full"
				onChange={handleChange}
				onBlur={() => {
					setTimeout(() => {
						setShow(false);
						setWord('');
					}, 100);
				}}
			/>
			{Object.keys(movies).length > 0 && show ? (
				<SearchResult items={movies} />
			) : null}
		</div>
	);
}

export default Input;
