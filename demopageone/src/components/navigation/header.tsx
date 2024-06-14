import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Toolbar, Button } from '@mui/material';
import CustomAppBar from '../mui/customAppBar';

const NavLink = styled(Link)({
	textDecoration: 'none',
	color: 'inherit',
	margin: '0 10px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const Logo = styled('img')({
	height: '30px',
	marginRight: '20px',
});

const Header: React.FC = () => {
	return (
		<CustomAppBar position='fixed'>
			<Toolbar>
				<NavLink to='/'>
					<Logo src={'/assets/logoText.png'} alt='Logo' />
				</NavLink>
				<NavLink to='/agent/default-agent-name'>
					<Button color='inherit'>Agents</Button>
				</NavLink>
				<NavLink to='/map'>
					<Button color='inherit'>Maps</Button>
				</NavLink>
				{/* <NavLink to='/weapon'>
					<Button color='inherit'>Weapons</Button>
				</NavLink> */}
			</Toolbar>
		</CustomAppBar>
	);
};

export default Header;
