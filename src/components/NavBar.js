import React, { useState } from 'react';
import { FaBookmark, FaHome, FaPlayCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SideBarIcon from '../utils/SideBarIcon';
import Dropdown from './Dropdown';

function SideBar() {
	const [dropdowns, setDropdown] = useState(false);

	return (
		<nav className="fixed h-14 md:h-full bg-darks bottom-0 w-full z-50 left-0 flex  md-nav md:w-2/6 lg:w-3/12">
			<div
				onMouseLeave={() => setDropdown(false)}
				className="relative flex space-x-16 justify-center md:space-x-12 md:font-bold items-center w-full "
			>
				<NavLink
					activeClassName="is-active"
					activeStyle={{
						color: '#4ecca3',
					}}
					className="md:h-full md:flex-row md:justify-end flex-center hover:text-main "
					exact
					to="/"
				>
					<SideBarIcon Icon={FaHome} title="Home" />
				</NavLink>
				<span className="md:h-full md:flex-row md:justify-end flex-center text-downdark">
					<SideBarIcon title="Collection" Icon={FaBookmark} />
				</span>

				<button
					className="md:h-full md:flex-row md:justify-end flex-center hover:text-main"
					onMouseEnter={() => setDropdown(true)}
					onClick={() => setDropdown(!dropdowns)}
				>
					<SideBarIcon title="Movies" Icon={FaPlayCircle} />
				</button>
				{dropdowns && <Dropdown />}
			</div>
		</nav>
	);
}

export default SideBar;
