import './App.css';
import Vehicle from "./components/vehicle.tsx";
import {useState} from "react";

// Parent component
function App() {
    // useState hook for username
    const [username, setUsername] = useState<string>("");

    // useState hook for count
    const [count, setCount] = useState<number>(0);

    // Handle input change for username
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    // Handle increase button click
    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Hello {username}</h1>
            <p>You can edit this..!</p>

            <label>Enter user name  </label>
            <input type="text" onChange={handleInputChange} />

            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase</button>

            <h2>Vehicle</h2>
            <Vehicle title="Toyota Corolla" description="Toyota Corolla is the highest sold vehicle" />
            <Vehicle title="Toyota Land Cruiser" description="Toyota Land Cruiser is the highest sold vehicle" />
        </div>
    )
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
