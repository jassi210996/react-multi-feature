import { useEffect } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

export function App() {
	const { response, error, isLoading, refetch } = useFetch(
		'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=50'
	);
  useEffect(() => {
    refetch();
  }, []);
  
	useEffect(() => {
		console.log(response, error, isLoading);
	}, [response, error, isLoading]);

	return (
		<>
			<h1>Parcel React App</h1>
			<p>
				Edit <code>src/App.tsx</code> to get started!
			</p>
		</>
	);
}
export default App;