import axios from "axios";
import {useState} from "react";
import CategoryType from "../types/CategoryType";

function Category(){

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [categoryName,setCategoryName] = useState<string>("");
    // function for load  exists categories
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

            <h2>Create category</h2>

            <form>
                <label>Category Name: </label>
                <input type="text" required/>

                <button>Create Category</button>
            </form>

        </div>
    )
}

export default Category