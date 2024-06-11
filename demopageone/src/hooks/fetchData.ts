import axios from 'axios';

const fetchData = async (endpoint: string) => {
	const response = await axios.get(`https://valorant-api.com/v1/${endpoint}`);
	return response.data.data;
};

export default fetchData;
