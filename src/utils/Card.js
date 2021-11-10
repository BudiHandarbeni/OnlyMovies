import React, { Suspense } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { API_ENDPOINT } from '../assets/request/api-endpoint';

import PercentIcont from './PercentIcont';

function Card({ result }) {
	const movies = result;
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 grid-flow-row auto-rows-max ">
			{movies &&
				movies.map((movie, i) => {
					return (
						<Link
							className="ring-2 ring-main rounded-xl"
							key={i}
							to={`/detail/${movie.id}`}
						>
							<div className="container-card ">
								<div>
									<Suspense fallback={<div className="w-full h-44"></div>}>
										<img
											width="100%"
											height="400px"
											src={`${process.env.PUBLIC_URL}/img/placeholder.png`}
											data-src={API_ENDPOINT.image_low(movie.poster_path)}
											srcSet={API_ENDPOINT.image_low(movie.poster_path)}
											alt={movie.title}
											className="rounded-t-xl lazy"
										/>
									</Suspense>
									<div className="px-2 transform z-mins -translate-y-7">
										<div className="w-1/2">
											<PercentIcont
												size={50}
												precentage={parseInt(movie.vote_average * 10)}
											/>
										</div>

										<h4 className="text-sm font-bold">{movie.title}</h4>
										<div className="flex justify-between mt-2">
											<span className="text-xs text-lowdark">
												{movie.release_date}
											</span>
											<span className="flex text-xs text-lowdark">
												<FaRegThumbsUp />
												{movie.vote_count}
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
}

export default Card;
