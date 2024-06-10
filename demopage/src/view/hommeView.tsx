import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Lefter from '../components/navigation/lefter';
import SideLeft from '../components/navigation/sideLeft';
import SideRight from '../components/navigation/sideRight';
import Content from '../components/home/content';
import Header from '../components/navigation/header';
import { RootState } from '../redux/store';
import { Container, ContentBox, MenuContainer } from './hommeView.styles';

const HommeView: React.FC = () => {
	const backgroundColors = useSelector((state: RootState) => state.character.backgroundColors);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Container backgroundColors={backgroundColors}>
			<Header toggleMenu={toggleMenu} />
			<MenuContainer menuOpen={menuOpen}>
				<Lefter />
				<SideLeft onClose={toggleMenu} />
			</MenuContainer>
			<ContentBox>
				<Content />
			</ContentBox>
			<SideRight />
		</Container>
	);
};

export default HommeView;
