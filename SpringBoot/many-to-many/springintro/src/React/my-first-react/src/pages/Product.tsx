import { useEffect, useState } from "react";
import ProductType from "../types/ProductType";
import axios from "axios";

function Product() {

    const [products, setProducts] = useState<ProductType[]>([]);

    async function loadProducts() {
        const response = await axios.get("http://localhost:8081/products")
        setProducts(response.data);
    }

    useEffect(function () {
        loadProducts();
    }, [])

    return (
        <div className="container mx-auto py-5">
            <h1 className="text-white text-3xl font-bold">Products</h1>

            <table className="table min-w-full border-separate border-spacing-0 text-center pt-5">
                <thead className="bg-slate-600 ">
                    <th className="font-bold">Product ID</th>
                    <th className="font-bold">Product Name</th>
                    <th className="font-bold">Product Price</th>
                    <th className="font-bold">Actions</th>
                </thead>

                <tbody>
                {products.map(function (product) {
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td></td>
                        </tr>
                    )
                })}

                </tbody>

            </table>

            {products.map(function (product) {
                return (
                    <div>
                        {product.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Product;