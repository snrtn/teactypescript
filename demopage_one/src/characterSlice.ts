import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';

interface Character {
	mal_id: number;
	name: string;
	images?: {
		jpg?: {
			image_url?: string;
		};
	};
}

interface CharacterDetail {
	mal_id: number;
	url: string;
	images: {
		jpg: {
			image_url: string;
		};
	};
	name: string;
	name_kanji: string;
	nicknames: string[];
	favorites: number;
	about: string;
}

interface CharacterState {
	characters: Character[];
	characterDetail: CharacterDetail | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: CharacterState = {
	characters: [],
	characterDetail: null,
	status: 'idle',
	error: null,
};

export const fetchCharacters = createAsyncThunk('character/fetchCharacters', async (animeId: string) => {
	const response = await axiosInstance.get(`/anime/${animeId}/characters`);
	const characterData = response.data.data.map((item: any) => item.character);
	return characterData as Character[];
});

export const fetchCharacterDetail = createAsyncThunk('character/fetchCharacterDetail', async (characterId: string) => {
	const response = await axiosInstance.get(`/characters/${characterId}`);
	return response.data.data as CharacterDetail;
});

const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCharacters.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
				state.status = 'succeeded';
				state.characters = action.payload;
			})
			.addCase(fetchCharacters.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to fetch characters';
			})
			.addCase(fetchCharacterDetail.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCharacterDetail.fulfilled, (state, action: PayloadAction<CharacterDetail>) => {
				state.status = 'succeeded';
				state.characterDetail = action.payload;
			})
			.addCase(fetchCharacterDetail.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to fetch character detail';
			});
	},
});

export default characterSlice.reducer;
