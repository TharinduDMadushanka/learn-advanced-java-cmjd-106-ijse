import './App.css';

// @ts-ignore
import Home from "./pages/Home.tsx";

// Parent component
function App() {
    return Home();
}

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
