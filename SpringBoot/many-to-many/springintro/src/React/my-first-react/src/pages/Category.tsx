import axios from "axios";

function Category(){

    function loadCategories(){
        axios.get("http://localhost:8080/categories")
    }

    return(
        <div>
            <h1>Categories</h1>
            <button onClick={loadCategories}>load</button>
        </div>
    )
}

export default Category