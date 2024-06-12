import { GlobalStyles } from '@mui/material';

const globalStyles = {
	html: {
		margin: '0%',
		fontSize: '62.5%',
		// 1rem = 10px
		// 128px = 12.8rem, 4px = 0.4rem
	},
	'h1, h2, h3, h4, h5, h6': {
		fontFamily: "'Bebas Neue', sans-serif !important",
	},
	body: {
		paddingTop: '70px',
		fontFamily: "'Open Sans', sans-serif !important",
		color: '#1D1D1F',
		// color: '#F5F5F7',
	},
};

const NormalizeStyles = () => <GlobalStyles styles={globalStyles} />;
export default NormalizeStyles;
