import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const addHashToColors = (colors: string[]) => colors.map((color) => `#${color}`);

export const Container = styled(Box)(({ theme }) => ({
	display: 'flex',
	height: '90vh',
	overflow: 'hidden',
	boxSizing: 'border-box',
	flexDirection: 'row',
	[theme.breakpoints.down('sm')]: {
		height: '115vh',
	},
}));

export const ContentBox = styled(Box)<{ agent: any }>(({ agent, theme }) => ({
	background: `linear-gradient(180deg, ${addHashToColors(agent.backgroundGradientColors).join(', ')})`,
	color: '#fff',
	padding: '0 30px',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column-reverse',
	},
	[theme.breakpoints.down('sm')]: {
		paddingTop: '40px',
		justifyContent: 'start',
	},
}));

export const IofoDesc = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: '0 100px',
	width: '50%',
	[theme.breakpoints.down('md')]: {
		width: '100%',
		padding: '0',
	},
	[theme.breakpoints.down('sm')]: {
		padding: '0',
	},
}));

export const InfoBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
	position: 'relative',
	width: '50%',
	[theme.breakpoints.down('md')]: {
		width: '100%',
		marginTop: '20px',
	},
	[theme.breakpoints.down('sm')]: {
		marginTop: '8vh',
	},
}));

export const BackgroundImage = styled('img')(({ theme }) => ({
	width: '400px',
	position: 'relative',
	top: '45%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 1,
	backfaceVisibility: 'hidden',
	[theme.breakpoints.down('sm')]: {
		width: '250px',
	},
}));

export const PortraitImage = styled('img')(({ theme }) => ({
	width: '800px',
	height: 'auto',
	position: 'absolute',
	top: '45%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 2,
	margin: 'auto',
	[theme.breakpoints.down('md')]: {
		width: '600px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '450px',
		paddingRight: '8rem',
	},
}));

export const RoleBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	margin: '20px 0',
	padding: '10px',
	border: '20px solid transparent',
	borderRadius: '8px',
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	'& img': {
		marginRight: '10px',
	},
	[theme.breakpoints.down('md')]: {
		padding: '5px',
		margin: '10px 0',
	},
	[theme.breakpoints.down('sm')]: {
		'& img': {
			marginRight: '0',
			marginBottom: '5px',
		},
	},
}));
