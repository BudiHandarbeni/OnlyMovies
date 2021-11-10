import React from 'react';

export default function Loading({ size, postion }) {
	return (
		<div className={`${postion}  m-auto inset-1/2 `}>
			<svg
				className={`m-auto animate-spin h-${size} w-${size} md:h-${
					size + 4
				} md:w-${
					size + 4
				} rounded-full border-4  border-opacity-25 border-t-darks`}
				style={{ borderRightColor: 'white' }}
				viewBox="0 0 24 24"
			></svg>
		</div>
	);
}
