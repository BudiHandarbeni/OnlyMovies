import React from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from '../utils/MovieList';

function Dropdown() {
	return (
		<ul className="absolute md:top-full bottom-full right-0 ">
			{MovieList.map((movie, i) => {
				return (
					<li className="px-4 py-2 group bg-darks hover:bg-downdark" key={i}>
						<Link className="group-hover:text-main h-full" to={movie.path}>
							{movie.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Dropdown;
