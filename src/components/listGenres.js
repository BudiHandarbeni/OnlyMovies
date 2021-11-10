import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINT } from '../assets/request/api-endpoint';

function ListGenre() {
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		axios
			.get(API_ENDPOINT.list_genres)
			.then((resp) => resp.data)
			.then((data) => setGenres(data.genres));
	}, []);
	return (
		<ul className="flex space-x-4 mx-4 mt-4 overflow-y-hidden md:space-x-0 md:m-0 md:overflow-x-hidden overflow-x-auto md:translate-y-full md:flex-col md:h-screen90 md:overflow-y-auto md:sticky md:top-16 md:w-3/12 items-center md:pt-12 md:bg-darks">
			{genres.map((genre) => (
				<li key={genre.id} className="w-full text-center">
					<Link
						to={`/genres?type=${genre.id}`}
						className="block hover:scale-110 transform hover:text-font md:h-12 w-full text-lowdark font-bold shadow-inner hover:bg-downdark flex justify-center items-center border-downdark"
					>
						{genre.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default ListGenre;
