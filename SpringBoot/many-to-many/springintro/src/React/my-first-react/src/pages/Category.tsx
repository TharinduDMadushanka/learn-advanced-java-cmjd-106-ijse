import axios from "axios";
import { useState } from "react";
import CategoryType from "../types/CategoryType";

function Category() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");

    // Function to load existing categories
    // @ts-ignore
    async function loadCategories() {
        const response = await axios.get("http://localhost:8080/categories");
        setCategories(response.data);
    }

    // Function to handle category name input change
    function handleCategoryName(event: React.ChangeEvent<HTMLInputElement>) {
        setCategoryName(event.target.value);
    }

    // Function to handle form submission
    async function handleSubmit() {
        const data = { name: categoryName };
        const response = await axios.post("http://localhost:8080/categories", data);
        console.log(response);
        loadCategories();
    }

    return (
        <div>
            <h1>Categories</h1>
            <button onClick={loadCategories}>Load Categories</button>

            {categories.length > 0 && categories.map((category: CategoryType) => (
                <div key={category.id}>
                    {category.name}
                </div>
            ))}

            <h2>Create Category</h2>

            <form>
                <label>Category Name: </label>
                <input
                    type="text"
                    value={categoryName}
                    onChange={handleCategoryName}
                    required
                />
                <button type="button" onClick={handleSubmit}>Create Category</button>
            </form>
        </div>
    );
}

export default Category;
