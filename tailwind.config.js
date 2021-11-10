// const colors = require('ta');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darks: '#232931',
				light: '#393e46',
				main: '#4ecca3',
				font: '#eeeeee',
				downdark: '#4b525e',
				lowdark: '#bebebe',
			},
			outline: {
				main: 'solid 2px #4ecca3',
			},
			inset: {
				full: '100%',
				sl: '0.3rem',
			},
			spacing: {
				persen200: '200%',
				screen90: '90vh',
				screen75: '80vh',
				screen65: '6hvh',
			},
			zIndex: {
				mins: '-1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
