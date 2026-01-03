import { RouterProvider } from 'react-router';
import './App.css';
import Router from './routes';

export function App() {
	return <RouterProvider router={Router} />;
}
export default App;
