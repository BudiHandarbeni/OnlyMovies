import React from 'react';

export default function offlinePage() {
	return (
		<div className="offline-page object-center my-auto w-full h-full flex justify-center items-center">
			<img
				className="error-image w-full absolute z-zIndex inset-0 object-center object-contain xl:w-10/12 opacity-60 m-auto"
				src={`${process.env.PUBLIC_URL}/img/offline.svg`}
				alt="page not found"
			></img>
			<button
				onClick={window.location.reload()}
				className="md:w-44 md:h-12 w-28 text-darks h-8 text-sm font-bold relative top-60 md:top-40 opacity-80 z-0 bg-main rounded-full"
			>
				Reload Page
			</button>
		</div>
	);
}
