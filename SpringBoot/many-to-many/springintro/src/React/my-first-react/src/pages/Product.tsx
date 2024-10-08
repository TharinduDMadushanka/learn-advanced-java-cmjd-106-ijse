import {useEffect, useState} from "react";
import ProductType from "../types/ProductType";
import axios from "axios";
import CategoryType from "../types/CategoryType.tsx";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useAuth} from "../context/AuthContext.tsx";

function Product() {

    const {isAuthenticated, jwtToken} = useAuth();

    const [products, setProducts] = useState<ProductType[]>([]);

    //states required to create a product
    const [productName, setProductName] = useState<string>("");
    const [price, setPrice] = useState<number>(0.0);
    const [description, setDescription] = useState<string>("");
    const [categoryId, setCategoryId] = useState<number>();

    const [categories, setCategories] = useState<CategoryType[]>([]);

    //configuration
    const config = {
        headers:{
            Authorization: `Bearer ${jwtToken}`
        }
    }

    async function loadProducts() {
        const response = await axios.get("http://localhost:8080/products",config)
        setProducts(response.data);
    }

    async function loadCategories() {
        const response = await axios.get("http://localhost:8080/categories",config); //it takes 23ms for this API request
        setCategories(response.data);
    }

    useEffect(function () {

        if (isAuthenticated){
            loadProducts();
            loadCategories();
        }

    }, [isAuthenticated])

    function handleProductName(event: any) {
        setProductName(event.target.value);
    }

    function handlePrice(event: any) {
        setPrice(event.target.value);
    }

    function handleDescription(event: any) {
        setDescription(event.target.value);
    }

    function handleCategoryId(event: any) {
        setCategoryId(event.target.value);
    }

    async function handleSubmit() {
        const data = {
            name: productName,
            price: price,
            description: description,
            categoryId: categoryId
        }

        try {
            await axios.post("http://localhost:8080/products", data,config);
            loadProducts();
            setProductName("");
            setPrice(0);
            setDescription("");
            setCategoryId(0);
        } catch (error: any) {
            console.log(error);
        }
    }
    // update

    const [productEdit, setProductEdit] = useState<ProductType | null>(null);

    function editProduct(product: ProductType) {
        setProductEdit(product);

        setProductName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setCategoryId(product.category?.id);
    }

    async function updateProduct(){
        const date = {
            name: productName,
            price: price,
            description: description,
            categoryId: categoryId
        }

        try{

            await axios.put(`http://localhost:8080/products/ ${ productEdit?.id}`, date,config)
            setProductEdit(null)
            loadProducts();
            // setProductEdit();

            setProductName("");
            setPrice(0);
            setDescription("");
            setCategoryId(0)

        }catch{
            console.log(error)
        }
    }

    // delete
    async function deleteProduct(productId: number){

        try{
            await axios.delete(`http://localhost:8080/products/${productId}`)
            loadProducts();
        }catch (error){
            console.log(error)
        }

    }


    return (
        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-3xl font-semibold mb-5">Products</h1>

            <table className="w-full border-separate border-spacing-0 border-none text-left">
                <thead className="bg-slate-200">
                <tr>
                    <th className="w-[80px]">Product ID</th>
                    <th className="w-[200px]">Product Name</th>
                    <th className="w-[200px]">Product Price</th>
                    <th className="w-[200px]">Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map(function (product) {
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => editProduct(product)} className="bg-amber-600 text-white px-2 py-1 rounded-lg
                                hover:bg-slate-300">Edit
                                </button>
                            </td>

                            <td>
                                <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-2 py-1 rounded-lg
                                hover:bg-red-600">Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>

            <div className="border border-slate-200 py-3 px-4 rounded-lg max-w-[350px]">
                <form>
                    <div>
                        <label className="text-slate-600 font-sm block mb-2">Product Name</label>
                        <input type="text"
                               className="text-slate-600 font-sm block mb-3 w-full p-2 border border-slate-300 rounded-lg"
                               value={productName} onChange={handleProductName} required/>
                    </div>

                    <div>
                        <label className="text-slate-600 font-sm block mb-2">Price</label>
                        <input type="text"
                               className="text-slate-600 font-sm block mb-3 w-full p-2 border border-slate-300 rounded-lg"
                               value={price} onChange={handlePrice} required/>
                    </div>

                    <div>
                        <label className="text-slate-600 font-sm block mb-2">Description</label>
                        <input type="text"
                               className="text-slate-600 font-sm block mb-3 w-full p-2 border border-slate-300 rounded-lg"
                               value={description} onChange={handleDescription} required/>
                    </div>

                    <div>
                        <label className="text-slate-600 font-sm block mb-2">Category</label>
                        <select
                            className="text-slate-600 font-sm block mb-3 w-full p-2 border border-slate-300 rounded-lg"
                            value={categoryId} onChange={handleCategoryId} required>
                            <option value="">Please select category</option>
                            {categories.map(function (category) {
                                return (
                                    <option value={category.id}>{category.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/*conditional rendering*/}
                    {productEdit ? (
                            <>
                                <button type="button"
                                        className="py-3 px-4 bg-slate-800 text-white rounded-lg hover:bg-slate-950 mb-2 text-sm"
                                        onClick={updateProduct}>Update Product
                                </button>
                            </>
                        ) :

                        <button type="button"
                                className="py-3 px-4 bg-slate-800 text-white rounded-lg hover:bg-slate-950 mb-2 text-sm"
                                onClick={handleSubmit}>Create Product
                        </button>
                    }

                </form>
            </div>

        </div>
    )
}

export default Product;