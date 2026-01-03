import { createBrowserRouter } from 'react-router';
import RootLayout from './routes/Root';
import ProductsPage from './routes/product/ProductsPage';
import { PostListLoader } from './routes/product/loader';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <ProductsPage />,
                loader: PostListLoader,
			},
		],
	},
]);
export default Router;
