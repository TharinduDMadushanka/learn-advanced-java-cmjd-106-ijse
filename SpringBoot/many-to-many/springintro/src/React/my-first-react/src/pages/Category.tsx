import axios from "axios";
import {useState} from "react";
import CategoryType from "../types/CategoryType";

function Category(){

    const [categories, setCategories] = useState<CategoryType[]>([]);

    async function loadCategories(){
        const response = await axios.get("http://localhost:8080/categories");
        // console.log(response);// debugging
        setCategories(response.data);
    }

    return(
        <div>
            <h1>Categories</h1>
            <button onClick={loadCategories}>Load Category</button>

            {categories && categories.map(function (category:CategoryType){
                return (
                    <div>
                        {category.name}
                    </div>
                )
            })
                // show this content only if the category is true
            }

        </div>
    )
}

export default Category