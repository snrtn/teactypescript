// sideLeft.styles.ts
import { styled, Box as MuiBox, Button as MuiButton, Typography as MuiTypography } from '@mui/material';

export const Container = styled(MuiBox)`
	width: 200px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;

export const Button = styled(MuiButton)<{ selected: boolean; backgroundColor: string }>`
	width: 100%;
	height: calc(100vh / 4);
	text-align: left;
	justify-content: flex-start;
	color: white;
	border: 1px solid transparent;
	display: flex;
	align-items: center;
	background-size: 150%;
	background-position: left;
	position: relative;
	background-color: ${(props) => (props.selected ? props.backgroundColor : 'transparent')};

	&:hover {
		background-color: ${(props) => props.backgroundColor};
		border-color: lightgrey;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

export const CharacterName = styled(MuiTypography)`
	position: relative;
	z-index: 1;
`;
