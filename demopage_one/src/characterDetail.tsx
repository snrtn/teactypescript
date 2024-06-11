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
	text-align: left;
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

	const formatAboutText = (text: string) => {
		const keywords = ['Age', 'Birthdate', 'Height', 'Affiliation', 'Position', 'Devil fruit', 'Bounty'];
		const regex = new RegExp(`(${keywords.join('|')})`, 'g');
		return text.split(regex).map((part, index) =>
			keywords.includes(part) ? (
				<span key={index}>
					<br />
					<b>{part}</b>
				</span>
			) : (
				<span style={{ marginRight: '8px' }}>{part}</span>
			),
		);
	};

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
					<p>
						<strong>Nicknames:</strong> {characterDetail.nicknames.join(', ')}
					</p>
					<p>
						<strong>Favorites:</strong> {characterDetail.favorites}
					</p>

					{characterDetail.about.split(';').map((line, index) => (
						<span key={index}>{formatAboutText(line.trim())}</span>
					))}
				</CharacterDetailCard>
			)}
		</section>
	);
};

export default CharacterDetail;
