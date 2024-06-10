import { styled, Button as MuiButton, Box as MuiBox } from '@mui/material';

interface ButtonProps {
	selectedMenu: boolean;
	backgroundColor: string;
}

export const Container = styled(MuiBox)`
	width: 200px;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	justify-content: center;
	@media (max-width: 600px) {
		width: 100%;
		height: auto;
		flex-direction: row;
		position: fixed;
		bottom: 0;
		z-index: 90;
	}
`;

export const Button = styled(MuiButton)<ButtonProps>`
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	color: white;
	background-color: ${(props) => (props.selectedMenu ? props.backgroundColor : 'transparent')};
	width: 100%;
	height: calc(100vh / 3);
	position: relative;
	border: 1px solid transparent;

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

	@media (max-width: 600px) {
		writing-mode: horizontal-tb;
		transform: none;
		width: calc(100vw / 3);
		height: 100%;
	}
`;
