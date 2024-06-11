import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';

interface Anime {
	mal_id: number;
	title: string;
	images: {
		jpg: {
			image_url: string;
		};
	};
}

interface AnimeState {
	animes: Anime[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: AnimeState = {
	animes: [],
	status: 'idle',
	error: null,
};

export const fetchAnimes = createAsyncThunk('anime/fetchAnimes', async () => {
	const response = await axiosInstance.get('/anime');
	return response.data.data as Anime[];
});

const animeSlice = createSlice({
	name: 'anime',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAnimes.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchAnimes.fulfilled, (state, action: PayloadAction<Anime[]>) => {
				state.status = 'succeeded';
				state.animes = action.payload;
			})
			.addCase(fetchAnimes.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to fetch animes';
			});
	},
});

export default animeSlice.reducer;
