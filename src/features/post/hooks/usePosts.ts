import useFetch from '../../../hooks/useFetch';
import { TPost } from '../types';

export function usePosts(page: number, query: string, autoFetch: boolean = false) {
	const params = new URLSearchParams({
		limit: '20',
		skip: String(page * 20),
		...(query ? { q: query } : {}),
	});

	return useFetch<{ posts: TPost[] }>(`/posts/search?${params.toString()}`, undefined, { autoFetch });
}
