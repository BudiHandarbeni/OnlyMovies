import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../utils/loading';
import { FaDownload } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { API_ENDPOINT } from '../../assets/request/api-endpoint';
// import getUrlMovie from '../../utils/getUrlMovie';
import { getYear } from '../../utils/getYear';
import PercentIcont from '../../utils/PercentIcont';

function Detail() {
	const [movie, setMovie] = useState({});
	const [year, setYear] = useState([]);
	// const [urlStream, setUrlStream] = useState('');
	const [genres, setGenres] = useState([]);
	// const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchDataMovie = async () => {
			try {
				const respon = await axios.get(API_ENDPOINT.detail(id));
				const movie = await respon.data;
				const year = getYear(movie.release_date);
				const genre = movie.genres;
				setGenres(genre);
				setMovie(movie);
				setYear(year);
			} catch (error) {
				console.log(error);
			}
		};
		fetchDataMovie();
	}, [id]);

	// useEffect(() => {
	// 	if (Object.keys(movie).length > 0 && Object.keys(year).length > 0) {
	// 		const titleFull = `${movie.title}-${year}`;
	// 		const a = async () => {
	// 			const url = await getUrlMovie(titleFull);
	// 			setUrlStream(url[0]);
	// 			setLoading(false);
	// 		};
	// 		a();
	// 	}
	// }, [movie, year]);

	return (
		<React.Fragment>
			<div className="mb-10 md:hidden">
				{Object.keys(movie).length > 0 ? (
					<React.Fragment>
						<div
							className="md:h-96 w-full h-48 bg-no-repeat bg-cover bg-left bg-clip-padding relative"
							style={{
								backgroundImage: `linear-gradient(244deg, rgb(0 0 0 / 58%) 40%, rgb(11 11 11)),url(${API_ENDPOINT.image_low(
									movie.backdrop_path
								)})`,
							}}
						>
							<img
								className="absolute w-24 left-4 top-6 object-cover rounded-lg md:w-48"
								alt={movie.title}
								src={API_ENDPOINT.image_low(movie.poster_path)}
							/>
						</div>
						<h2 className="text-center my-2 text-lg font-bold">
							{movie.title} <span>({year})</span>
						</h2>
						<div className="flex justify-evenly ">
							<div className="flex items-center">
								<div>
									<PercentIcont
										size={60}
										precentage={movie.vote_average * 10}
									/>
								</div>
								<h4 className="ket-icon">Movie Score</h4>
							</div>
							<a
								className="flex items-center"
								href={`https://databasegdriveplayer.co/player.php?tmdb=${id}`}
							>
								<i className="mr-1">
									<FaDownload />
								</i>
								Download Film
							</a>
						</div>
						<div className="text-base flex my-2 justify-center flex-wrap bg-darks py-2">
							<span className="release mr-3">{movie.release_date}</span>
							<span className="runtime">{`${Math.floor(movie.runtime / 60)}h ${
								movie.runtime % 60
							}m`}</span>
							<span className="w-full text-center">
								{genres && genres.map((genre) => genre.name).join(', ')}
							</span>
						</div>
						<div className="px-4">
							<h3 className="font-bold mb-2">Overview</h3>
							<p>{movie.overview}</p>
						</div>
					</React.Fragment>
				) : (
					<Loading size={8} postion="absolute" />
				)}
			</div>

			<div className="mb-10 hidden md:block">
				{Object.keys(movie).length > 0 ? (
					<React.Fragment>
						<div
							className="flex items-center h-screen75 space-x-8 p-8 lg:p-16 w-full bg-no-repeat bg-cover bg-left bg-clip-padding relative"
							style={{
								backgroundImage: `linear-gradient(244deg, rgb(0 0 0 / 58%) 40%, rgb(11 11 11)),url(${API_ENDPOINT.image_height(
									movie.backdrop_path
								)})`,
							}}
						>
							<img
								className="md:w-48 md:h-64 lg:h-96 lg:w-64 left-4 top-6 object-cover rounded-lg"
								alt={movie.title}
								src={API_ENDPOINT.image_height(movie.poster_path)}
							/>
							<div>
								<h2 className="text-center text-2xl font-black my-2 text-lg">
									{movie.title} <span>({year})</span>
								</h2>
								<div className="flex justify-evenly ">
									<div className="flex items-center">
										<div>
											<PercentIcont
												size={60}
												precentage={movie.vote_average * 10}
											/>
										</div>
										<h4 className="ket-icon">Movie Score</h4>
									</div>
									{/* {loading ? (
										<div className="my-auto w-8">
											<Loading size={5} postion="block" />
										</div>
									) : !urlStream ? (
										<span className="flex items-center text-downdark">
											<i>
												<FaDownload />
											</i>
											Download Film
										</span>
									) : (
										
									)} */}
									<a
										className="flex items-center"
										href={`https://databasegdriveplayer.co/player.php?tmdb=${id}`}
									>
										<i className="mr-1">
											<FaDownload />
										</i>
										Download Film
									</a>
								</div>
								<div className="text-base flex my-2 justify-center flex-wrap bg-darks py-2">
									<span className="release mr-3">{movie.release_date}</span>
									<span className="runtime">{`${Math.floor(
										movie.runtime / 60
									)}h ${movie.runtime % 60}m`}</span>
									<span className="w-full text-center">
										{genres && genres.map((genre) => genre.name).join(', ')}
									</span>
								</div>
								<div className="px-4">
									<h3 className="font-bold mb-2">Overview</h3>
									<p>{movie.overview}</p>
								</div>
							</div>
						</div>
					</React.Fragment>
				) : (
					<Loading size={8} postion="absolute" />
				)}
			</div>
		</React.Fragment>
	);
}

export default Detail;
