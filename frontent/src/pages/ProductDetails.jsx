
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { id } = useParams();

    const getProduct = async () => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            );

            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            setError("Unable to fetch product details.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    if (error) {
        return <h2 className="text-center text-red-500">{error}</h2>;
    }

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Product Details</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg p-6 shadow-md">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-full object-contain"
                />

                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        {product.title}
                    </h2>

                    <p className="text-green-600 font-bold text-xl mb-4">
                        Price: ${product.price}
                    </p>

                    <p className="mb-4">{product.description}</p>

                    <p className="mb-4">
                        <strong>Category:</strong> {product.category}
                    </p>

                    <p className="mb-4">
                        <strong>Rating:</strong> {product.rating?.rate} / 5
                    </p>

                    <Link
                        to="/products"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
