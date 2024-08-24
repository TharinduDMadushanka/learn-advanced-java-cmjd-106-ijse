import {useState} from "react";
import ProductType from "../types/ProductType.tsx";

function Product(){

    const [ products, setProduct] = useState<ProductType[]>([])

    return(
        <div>
            <h1>Products</h1>
        </div>
    );

}

export default Product
