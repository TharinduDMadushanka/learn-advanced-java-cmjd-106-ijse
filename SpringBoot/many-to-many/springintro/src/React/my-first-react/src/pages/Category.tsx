import axios from "axios";
import {useEffect, useState} from "react";
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

    // react side effect
    useEffect(function () {
        loadCategories(); // function that will be triggered at the side effect
    },[]) // dependency array, if it is blank it will be triggered only once

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
        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-3xl font-bold mb-5 text-slate-100">Categories</h1>
            <button className="py-3 px-4 bg-sky-500 text-white rounded-lg hover:bg-sky-200 hover:text-black mb-2"
                    onClick={loadCategories}>Load Categories</button>

            {categories.length > 0 && categories.map((category: CategoryType) => (
                <div className="text-slate-600 border border-slate-100 rounded mb-3 p-3 shadow-lg inline-block me-3"
                    key={category.id}>
                    {category.name}
                </div>
            ))}

            <h2 className="text-3xl text-slate-100 font-bold mb-3 mt-5">Create Category</h2>

            <div className = "border border-slate-200 p-3 rounded-lg max-w-[350px]">
                <form>
                    <label className="text-slate-300 font-sm block mb-2">Category Name: </label>
                    <input className= "text text-slate-600 font-bold mb-3 w-full p-2 border-slate-300 rounded"
                        type="text"
                        value={categoryName}
                        onChange={handleCategoryName}
                        required
                    />
                    <button className="py-3 px-4 bg-sky-500 text-white rounded-lg hover:bg-sky-200 hover:text-black mb-2" type="button" onClick={handleSubmit}>Create Category</button>
                </form>
            </div>
        </div>
    );
}

export default Category;
