import axios from "axios";

function Category(){

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