
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products"
            );

            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return <h2 className="text-center mt-10">Loading products...</h2>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold mb-3">
                            {product.title}
                        </h3>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 w-full object-contain mb-4"
                        />

                        <p className="font-bold text-xl mb-4">
                            ${product.price}
                        </p>

                        <Link
                            to={`/productDetails/${product.id}`}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
