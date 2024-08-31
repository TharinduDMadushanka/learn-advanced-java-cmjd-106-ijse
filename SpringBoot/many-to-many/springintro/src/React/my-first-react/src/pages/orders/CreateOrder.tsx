import {useEffect, useState} from "react";
import ProductType from "../../types/ProductType.tsx";
import axios from "axios";

function CreateOrder() {

    const [products, setProducts] = useState<ProductType[]>([]);

    async function loadProduct(){

        try{

            const response = await axios.get("http://localhost:8080/products");
            setProducts(response.data)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        loadProduct();
    }, [])

    return (

        <div>
            <div className="flex">
                <div className="w-[400px] border-r border-slate-100 p-2">
                    <span className="text-xl font-semibold text-white">Products</span>
                </div>

                <div className="p-2">
                    <span className="text-xl font-semibold text-white">New Order</span>
                </div>
            </div>
        </div>


    );

}

export default CreateOrder