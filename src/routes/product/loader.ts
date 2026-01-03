import httpClient from '../../services/httpClient';

export const PostListLoader = async () => {
	return httpClient(
		'/posts?limit=20',
		{ method: 'GET' }
	);
};
