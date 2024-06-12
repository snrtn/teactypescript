// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		black: Palette['primary'];
		white: Palette['primary'];
	}

	interface PaletteOptions {
		black?: PaletteOptions['primary'];
		white?: PaletteOptions['primary'];
	}
}

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
		black: {
			main: '#1D1D1F',
		},
		white: {
			main: '#F5F5F7',
		},
	},
};

const theme = createTheme(themeOptions);

export default theme;
