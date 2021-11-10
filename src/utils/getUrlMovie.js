import { changeToStrip } from './getYear';
import axios from 'axios';

const getUrlMovie = async (title) => {
	try {
		const data = { title: changeToStrip(title).toLowerCase() };

		const config = {
			method: 'post',
			url: 'https://databasegdriveplayer.co/player.php?tmdb=566525',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};

		const { urls_stream } = await axios(config).then(
			(response) => response.data
		);
		return urls_stream;
	} catch (error) {
		console.log(error);
	}
};

export default getUrlMovie;
