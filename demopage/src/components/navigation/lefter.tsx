import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { setCurrentPage } from '../../redux/slice/characterSlice';
import { RootState } from '../../redux/store';
import { Container, UpButton, DownButton } from './lefter.styles';

const Lefter: React.FC = () => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state: RootState) => state.character.currentPage);
	const characters = useSelector((state: RootState) => state.character.characters);

	const handleNext = () => {
		const totalPages = Math.ceil(characters.length / 4);
		if (currentPage < totalPages - 1) {
			dispatch(setCurrentPage(currentPage + 1));
		}
	};

	const handlePrev = () => {
		if (currentPage > 0) {
			dispatch(setCurrentPage(currentPage - 1));
		}
	};

	return (
		<Container>
			<UpButton onClick={handlePrev}>
				<FaChevronUp size={30} />
			</UpButton>
			<DownButton onClick={handleNext}>
				<FaChevronDown size={30} />
			</DownButton>
		</Container>
	);
};

export default Lefter;
