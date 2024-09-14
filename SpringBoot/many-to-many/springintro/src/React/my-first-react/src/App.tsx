import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product.tsx";
import Orders from "./pages/orders/Orders.tsx";
import CreateOrder from "./pages/orders/CreateOrder.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import Login from "./pages/Auth/Login.tsx";
import ProtectedRout from "./components/ProtectedRout.tsx";

// Parent component
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/*Protected Routs- need login to access bellow thing*/}
                    <Route element={<ProtectedRout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path={"/category"} element={<Category/>}/>
                        <Route path={"/product"} element={<Product/>} />
                        <Route path={"/Orders"} element={<Orders/>} />
                        <Route path="/orders/create" element={<CreateOrder/>} />
                    </Route>
                    {/*open rout*/}
                    <Route path="/auth/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

// Commented out code that may not be needed
// Define a type
// interface VehicleType {
//     title: string;
//     description: string;
// }

// Child component
// function Vehicle(props: VehicleType) {
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </div>
//     )
// }

export default App;
