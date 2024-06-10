import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FaRulerVertical } from 'react-icons/fa';
import { GiWeight } from 'react-icons/gi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Container, Title, Image, InfoText, AbilityList, AbilityItem } from './content.styles';

const Content: React.FC = () => {
	const selectedCharacter = useSelector((state: RootState) => state.character.selectedCharacter);
	const selectedMenu = useSelector((state: RootState) => state.character.selectedMenu);
	const characterDetails = useSelector((state: RootState) => state.character.characterDetails);

	if (!selectedCharacter) {
		return <Container>Select a character</Container>;
	}

	const details = characterDetails[selectedCharacter];

	if (!details) {
		return <Container>Loading character details...</Container>;
	}

	return (
		<Container>
			<Title>{details.name.toUpperCase()}</Title>
			{selectedMenu === 'info' && (
				<div>
					<Image src={details.sprites.front_default} alt={details.name} />
				</div>
			)}
			{selectedMenu === 'stats' && (
				<div>
					<InfoText>
						<FaRulerVertical /> Height: {details.height}
					</InfoText>
					<InfoText>
						<GiWeight /> Weight: {details.weight}
					</InfoText>
					<InfoText>
						<AiOutlineArrowUp /> Base Experience: {details.base_experience}
					</InfoText>
				</div>
			)}
			{selectedMenu === 'abilities' && (
				<div>
					<p>
						<strong>Abilities:</strong>
					</p>
					<AbilityList>
						{details.abilities.map((ability: any, index: number) => (
							<AbilityItem key={index}>{ability.ability.name}</AbilityItem>
						))}
					</AbilityList>
				</div>
			)}
		</Container>
	);
};

export default Content;
