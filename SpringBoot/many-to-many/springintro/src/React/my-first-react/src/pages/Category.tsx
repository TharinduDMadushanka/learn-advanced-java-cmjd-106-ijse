import axios from "axios";
import {useState} from "react";
import CategoryType from "../types/CategoryType.tsx";

function Category(){

    const [categories, setCategory] = useState<CategoryType[]>([]);

    async function loadCategories(){
        const response = await axios.get("http://localhost:8080/categories");
        console.log(response);// debugging
    }

    return(
        <div>
            <h1>Categories</h1>
            <button onClick={loadCategories}>Load Category</button>
        </div>
    )
}

export default Category