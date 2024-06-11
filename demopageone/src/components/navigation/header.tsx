import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavLink = styled(Link)({
	textDecoration: 'none',
	color: 'inherit',
	margin: '0 10px',
});

const Header: React.FC = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<NavLink to='/'>
					<Button color='inherit'>Agents</Button>
				</NavLink>
				<NavLink to='/map'>
					<Button color='inherit'>Maps</Button>
				</NavLink>
				<NavLink to='/weapon'>
					<Button color='inherit'>Weapons</Button>
				</NavLink>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
