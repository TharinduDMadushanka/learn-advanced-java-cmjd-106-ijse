import {useEffect, useState} from "react";
import ProductType from "../../types/ProductType.tsx";
import axios from "axios";
import product from "../Product.tsx";

function CreateOrder() {

    const [products, setProducts] = useState<ProductType[]>([]);

    async function loadProduct() {

        try {

            const response = await axios.get("http://localhost:8080/products");
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadProduct();
    }, [])


    const [orderedProducts, setOrderedProducts] = useState<ProductType[]>([]);

    function addProductToOrder(product: ProductType){

        // spreading the orderedProduct array and assign new value
        const updatedOrder = [... orderedProducts, product]
        setOrderedProducts(updatedOrder)

    }


    return (

        <div>
            <div className="flex">
                <div className="w-[300px] border-r border-slate-100 p-2">
                    <span className="text-xl font-semibold text-white block  p-2">Products</span>

                    <div className="mt-2">
                        {products.map(function (products) {
                            return (
                                <div onClick={() => addProductToOrder(products)} className="border border-slate-100 rounded-lg p-2 mb-3">
                                    <div className="text-lg font-semibold text-white">{products.name}</div>
                                    <div className="text-sm text-white">{products.category?.name}</div>
                                    <div className="text-sm text-green-500 text-right">Rs. {products.price}</div>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="p-2">
                    <span className="text-xl font-semibold text-white block  p-2">New Order</span>
                </div>
            </div>
        </div>


    );

}

export default CreateOrder