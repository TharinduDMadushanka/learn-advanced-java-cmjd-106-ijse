// import {useState} from 'react'

import './App.css'
import Vehicle from "./components/vehicle.tsx";

// parent components
function App() {
    // const [count, setCount] = useState(0)

    //hooks
    const [username, setUsername] = useState<String>(" ");

    return (
        <div>
            <h1>Hello</h1>
            <p>You can edit this..!</p>

            <label>Enter user name  </label>
            <input type="text"></input>

            <h2>Vehicle</h2>
            <Vehicle title="Toyota Corolla" description="Toyota corolla is the hoghest sold vehicle " />
            <Vehicle title="Toyota Landcruser" description="Toyota Landcruser is the hoghest sold vehicle " />
        </div>
    )
}

// define a type
// interface VehicleType{
//     title: string,
//     description:string
// }


// child components
// function Vehicle(props: VehicleType) {
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </div>
//     )
// }

export default App
