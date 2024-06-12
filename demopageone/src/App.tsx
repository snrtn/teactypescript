import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPage from './pages/layoutPage';

import AgentPage from './pages/agentPage';
import MapPage from './pages/mapPage';
import WeaponPage from './pages/weaponPage';
import NotFoundPage from './pages/notFoundPage';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutPage />}>
				<Route index element={<AgentPage />} />
				<Route path='/map' element={<MapPage />} />
				<Route path='/weapon' element={<WeaponPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
