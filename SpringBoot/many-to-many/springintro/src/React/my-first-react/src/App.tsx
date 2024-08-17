import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// Parent component
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path={"category"} element={<Category/>}/>
            </Routes>
        </BrowserRouter>
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
