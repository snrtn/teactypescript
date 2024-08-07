import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import store from './store';
import theme from './theme';
import App from './App';
import NormalizeStyles from './normalize.styles';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<NormalizeStyles />
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
);
