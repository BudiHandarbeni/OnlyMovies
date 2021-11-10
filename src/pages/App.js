import Header from '../components/Header';
import ListGenre from '../components/listGenres';
import Config from '../config/config';
import OfflinePage from './offline_page/offlinePage';

function App() {
	return (
		<div className="App md:relative">
			<Header />
			<main className="flex flex-col md:flex-row">
				<ListGenre />
				<div className="container md:mx-12 mb-20 md:mb-8 md:relative">
					{navigator.onLine ? <Config /> : <OfflinePage />}
				</div>
			</main>
		</div>
	);
}

export default App;
