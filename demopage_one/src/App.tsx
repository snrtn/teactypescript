import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AnimeList from './animeList';
import AnimeDetail from './animeDetail';
import CharacterDetail from './characterDetail';

function App() {
	return (
		<Routes>
			<Route path='/' element={<AnimeList />} />
			<Route path='/anime/:id' element={<AnimeDetail />} />
			<Route path='/character/:id' element={<CharacterDetail />} />
		</Routes>
	);
}

export default App;
