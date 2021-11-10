import React from 'react';

function PercentIcont({ precentage, size }) {
	const sizes = size / 2;
	const fontSize = size / 4.2;
	const rad = sizes - 5;
	const area = rad * 2 * Math.PI;
	const percent = area - (precentage * area) / 100;

	return (
		<div className="relative grid justify-items-center">
			<svg className="transform -rotate-90" width={size} height={size}>
				<circle
					fill="#333"
					stroke="#4b615a"
					strokeWidth={4}
					cx={sizes}
					cy={sizes}
					r={rad}
				></circle>
				<circle
					fill="transparent"
					stroke="#4ecca3"
					strokeWidth={4}
					cx={sizes}
					cy={sizes}
					r={rad}
					strokeDasharray={area}
					strokeDashoffset={percent}
				></circle>
			</svg>
			<span
				className="absolute inset-1/3"
				style={{ fontSize: fontSize, fontWeight: 'bolder' }}
			>
				{precentage}
				<span className="text-xs">%</span>
			</span>
		</div>
	);
}

export default PercentIcont;
