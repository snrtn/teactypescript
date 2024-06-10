import { styled, Box as MuiBox, Button as MuiButton } from '@mui/material';

export const Container = styled(MuiBox)`
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: end;
	padding-top: 7rem;
`;

export const StyledButton = styled(MuiButton)`
	color: white;
	margin-bottom: 40px;

	&:hover {
		background-color: transparent;
	}
`;

export const UpButton = styled(StyledButton)`
	margin-bottom: 64px;
`;

export const DownButton = styled(StyledButton)`
	margin-bottom: 80px;
`;
