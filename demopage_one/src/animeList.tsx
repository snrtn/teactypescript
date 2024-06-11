import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './store';
import { fetchAnimes } from './animeSlice';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const AnimeCard = styled('div')`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
	margin: 8px;
	text-align: center;
`;

const AnimeList: React.FC = () => {
	const dispatch = useAppDispatch();
	const animes = useSelector((state: RootState) => state.anime.animes);
	const status = useSelector((state: RootState) => state.anime.status);
	const error = useSelector((state: RootState) => state.anime.error);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchAnimes());
		}
	}, [status, dispatch]);

	let content;

	if (status === 'loading') {
		content = <p>Loading...</p>;
	} else if (status === 'succeeded') {
		content = (
			<div>
				{animes.map((anime) => (
					<AnimeCard key={anime.mal_id}>
						<Link to={`/anime/${anime.mal_id}`}>
							<h3>{anime.title}</h3>
							{anime.images?.jpg?.image_url && <img src={anime.images.jpg.image_url} alt={anime.title} />}
						</Link>
					</AnimeCard>
				))}
			</div>
		);
	} else if (status === 'failed') {
		content = <p>{error}</p>;
	}

	return (
		<section>
			<h2>Anime List</h2>
			{content}
		</section>
	);
};

export default AnimeList;
