import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
	Home,
	Detail,
	Collections,
	Populer,
	TopRated,
	NowPlaying,
	Genres,
} from '../../pages/pages';

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/detail/:id">
				<Detail />
			</Route>
			<Route path="/collections">
				<Collections />
			</Route>
			<Route path="/popular">
				<Populer />
			</Route>
			<Route path="/top-rated">
				<TopRated />
			</Route>
			<Route path="/now-playing">
				<NowPlaying />
			</Route>
			<Route path="/genres">
				<Genres />
			</Route>
		</Switch>
	);
}

export default Routes;
