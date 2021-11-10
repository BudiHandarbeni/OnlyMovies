import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from '../components/Input';
import NavBar from '../components/NavBar';

function Header() {
	return (
		<header className="App-header px-5 flex sticky top-0 z-10 justify-between w-full h-16 md:h-16 bg-darks items-center">
			<img
				src={process.env.PUBLIC_URL + '/img/logo.png'}
				className="hidden lg:w-48 md:block md:w-40"
				alt="logo"
			/>
			<img
				src={process.env.PUBLIC_URL + '/img/logo1.png'}
				className="object-cover w-9 md:hidden"
				alt="logo"
			/>
			<div className="flex bg-light items-center h-2/4 w-4/5 rounded-lg px-3 md:w-2/6 md:h-4/6 lg:w-5/12">
				<FaSearch className="Search-icon mr-2 opacity-25" />
				<Input />
			</div>
			<NavBar />
		</header>
	);
}

export default Header;
