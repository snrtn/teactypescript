import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { fetchCharacterDetail } from './characterSlice';
import { RootState } from './store';
import { styled } from '@mui/material';

const CharacterDetailCard = styled('div')`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
	margin: 8px;
	text-align: center;
`;

const CharacterDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const characterDetail = useAppSelector((state: RootState) => state.character.characterDetail);
	const status = useAppSelector((state: RootState) => state.character.status);
	const error = useAppSelector((state: RootState) => state.character.error);

	useEffect(() => {
		if (status === 'idle' && id) {
			dispatch(fetchCharacterDetail(id));
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
			<h2>Character Detail</h2>
			{characterDetail && (
				<CharacterDetailCard>
					<h3>{characterDetail.name}</h3>
					{characterDetail.images?.jpg?.image_url && (
						<img src={characterDetail.images.jpg.image_url} alt={characterDetail.name} />
					)}
					<p>{characterDetail.name_kanji}</p>
					<p>Nicknames: {characterDetail.nicknames.join(', ')}</p>
					<p>Favorites: {characterDetail.favorites}</p>
					<ul>
						{characterDetail.about.split(';').map((line, index) => (
							<p key={index}>{line.trim()}</p>
						))}
					</ul>
				</CharacterDetailCard>
			)}
		</section>
	);
};

export default CharacterDetail;
