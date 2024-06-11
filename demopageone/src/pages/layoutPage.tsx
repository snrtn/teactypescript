import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/header';

const LayoutPage: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default LayoutPage;
