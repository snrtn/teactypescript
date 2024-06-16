import axios from 'axios';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const fetchVideo = async (query: string): Promise<string | null> => {
	try {
		console.log('Fetching video for query:', query);
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				part: 'snippet',
				q: query,
				type: 'video',
				key: YOUTUBE_API_KEY,
				maxResults: 1,
			},
		});

		if (response.data.items.length > 0) {
			console.log('Video found:', response.data.items[0].id.videoId);
			return response.data.items[0].id.videoId;
		} else {
			console.log('No video found for query:', query);
			return null;
		}
	} catch (error) {
		console.error('Error fetching video:', error);
		return null;
	}
};

export default fetchVideo;
