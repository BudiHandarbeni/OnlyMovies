const getYear = (params) => {
	const path = /\d*/;
	return params.match(path);
};

const changeToStrip = (params) => {
	let result = params.match(/[a-zA-Z0-9']+/g);

	// let result1 = params.split(' ');
	let a = result.map((data) => {
		// let result2 = data.match(/[a-zA-Z0-9']+/g);
		const a = data.split("'");
		return a.join('');
	});
	return a.join('-');
};

const getId = (params) => params.match(/postid-([0-9]+)/);

// const getUrl = (params) => params.match(/https:\/\/l[a-zA-Z0-9/.-]*/g);
const getUrl = (params) => params.match(/http:[a-zA-Z.?0-9=%/]+/gm);

export { changeToStrip, getYear, getUrl, getId };
