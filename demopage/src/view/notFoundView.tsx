import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundView: React.FC = () => {
	return (
		<Box sx={{ textAlign: 'center', mt: 5 }}>
			<Typography variant='h1' component='h2' gutterBottom>
				404
			</Typography>
			<Typography variant='h5' component='h3' gutterBottom>
				Page Not Found
			</Typography>
			<Typography variant='body1'>The page you are looking for doesn't exist or an error occurred.</Typography>
			<Box mt={3}>
				<Link to='/'>Go back to Home</Link>
			</Box>
		</Box>
	);
};

export default NotFoundView;
