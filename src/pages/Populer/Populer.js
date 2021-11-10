import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { API_ENDPOINT } from '../../assets/request/api-endpoint';
import { card as Card, loading as Loading } from '../../utils/index';
export default function Populer() {
	const [movies, setMovies] = useState([]);
	const [pages, setPages] = useState(1);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchDatas = async () => {
			const fetchData = await axios.get(API_ENDPOINT.popular(pages));
			const data = fetchData.data;
			const total = [...movies, ...data.results];
			setMovies(total);
			setLoading(false);
		};
		fetchDatas();
		// eslint-disable-next-line
	}, [pages]);

	return (
		<section className="mx-4 flex flex-col justify-center items-center space-y-4">
			<h2 className="mt-4 text-2xl font-bold text-font">Popular</h2>
			{movies.length > 0 ? (
				<React.Fragment>
					<Suspense fallback={<Loading />}>
						<Card result={movies} />
					</Suspense>

					{loading ? (
						<div className="my-auto w-7">
							<Loading size={7} postion="block" />
						</div>
					) : (
						<button
							className="h-8 md:h-20 w-full bg-darks font-bold rounded-lg"
							onClick={() => {
								setLoading(true);
								setPages(pages + 1);
							}}
						>
							Load More
						</button>
					)}
				</React.Fragment>
			) : (
				<Loading size={8} postion="absolute" />
			)}
		</section>
	);
}
