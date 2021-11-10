import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult({ items }) {
	return (
		<ul className="z-50 absolute w-full">
			{items &&
				items.map((item, id) => {
					return (
						<li
							key={id}
							className="px-4 py-1 hover:bg-downdark w-full bg-darks z-50"
						>
							<Link
								className="block w-full text-xs md:text-sm"
								to={`/detail/${item.id}`}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
		</ul>
	);
}

export default SearchResult;
