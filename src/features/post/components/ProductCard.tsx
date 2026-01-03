import { TPost } from "../types";

const ProductCard = ({ product }: { product: TPost }) => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<img
				src={`https://picsum.photos/seed/${product.id}/400/250`}
				alt={product.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
					{product.title}
				</h3>
				<p className="text-gray-600 text-sm mb-3 line-clamp-3">
					{product.body}
				</p>
				<div className="flex items-center justify-between">
					<span className="text-xs text-gray-500">ID: {product.id}</span>
					<span className="text-xs text-gray-500">User: {product.userId}</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
