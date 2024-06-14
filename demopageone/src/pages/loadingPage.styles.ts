import { styled, keyframes } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const loadingAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const StyledLoadingContainer = styled(Box)({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#0E1822',
	zIndex: 1000,
	overflow: 'hidden',
	color: '#fff',
});

export const LoadingText = styled(Typography)({
	fontSize: '2rem',
	marginBottom: '20px',
});

export const ProgressBarContainer = styled(Box)({
	width: '80%',
	height: '30px',
	backgroundColor: '#000',
	border: '2px solid #FD4655',
	borderRadius: '5px',
	overflow: 'hidden',
});

export const ProgressBar = styled(Box)({
	height: '100%',
	backgroundColor: '#FD4655',
	animation: `${loadingAnimation} 3s infinite`,
});
