import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { fetchCharacters } from './characterSlice';
import { RootState } from './store';
import { styled } from '@mui/material';

const CharacterCard = styled('div')`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
	margin: 8px;
	text-align: center;
`;

const AnimeDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const characters = useAppSelector((state: RootState) => state.character.characters);
	const status = useAppSelector((state: RootState) => state.character.status);
	const error = useAppSelector((state: RootState) => state.character.error);

	useEffect(() => {
		if (status === 'idle' && id) {
			dispatch(fetchCharacters(id));
		}
	}, [status, id, dispatch]);

	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'failed') {
		return <p>{error}</p>;
	}

	return (
		<section>
			<h2>Characters</h2>
			<div>
				{characters.map((character) => (
					<CharacterCard key={character.mal_id}>
						<h3>{character.name}</h3>
						<Link to={`/character/${character.mal_id}`}>
							{character.images?.jpg?.image_url ? (
								<img src={character.images.jpg.image_url} alt={character.name} />
							) : (
								<p>No image available</p>
							)}
						</Link>
					</CharacterCard>
				))}
			</div>
		</section>
	);
};

export default AnimeDetail;
