import React from 'react';
import { FaSortDown } from 'react-icons/fa';

function SideBarIcon({ Icon, title }) {
	return (
		<React.Fragment>
			{Icon && (
				<Icon className="text-2xl mb-1 md:mr-1 md:mb-0 md:text-xs lg:text-base" />
			)}
			{title !== 'Movies' ? (
				<h3 className="side-bar-item__title text-xs md:text-xs  lg:text-base">
					{title}
				</h3>
			) : (
				<h3 className="flex side-bar-item__title text-xs md:text-xs  lg:text-base">
					{title} <FaSortDown />
				</h3>
			)}
		</React.Fragment>
	);
}

export default SideBarIcon;
