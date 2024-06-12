import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.black.main,
	height: '7rem',
}));

export default CustomAppBar;
