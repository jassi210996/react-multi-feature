import { useLoaderData } from 'react-router';
import ProductCard from '../../features/post/components/ProductCard';
import { useEffect, useMemo, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { TPost } from '../../features/post/types';
import { usePosts } from '../../features/post/hooks/usePosts';

const ProductsPage = () => {
	const { posts }: { posts: TPost[] } = useLoaderData();

	const [searchQuery, setSearchQuery] = useState('');

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	const { response, isLoading, error, refetch } = usePosts(
		0,
		debouncedSearchQuery,
		false
	);

	const displayedPosts = useMemo(() => {
		const normalizedQuery = debouncedSearchQuery.trim();
		if (!normalizedQuery) return posts;
		return response?.posts ?? [];
	}, [debouncedSearchQuery, posts, response?.posts]);

	useEffect(() => {
		const normalizedQuery = debouncedSearchQuery.trim();
		if (normalizedQuery) {
			refetch();
		}
	}, [debouncedSearchQuery, refetch]);

	return (
		<>
			<h2 className='text-2xl font-bold mb-4'>Products</h2>
			<input
				type='text'
				placeholder='Search products...'
				value={searchQuery}
				className='mb-4 p-2 border border-gray-300 rounded w-full'
				onChange={(event) => setSearchQuery(event.target.value)}
			/>
			{isLoading && <div className='text-center py-4'>Loading...</div>}
			{error && (
				<div className='text-red-500 text-center py-4'>
					Error loading posts
				</div>
			)}
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
				{displayedPosts.map((record: TPost) => (
					<ProductCard
						key={record.id}
						product={record}
					/>
				))}
			</div>
		</>
	);
};

export default ProductsPage;
