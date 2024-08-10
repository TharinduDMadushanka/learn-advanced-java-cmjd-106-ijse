import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// parent components
function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>This is my first React app</h1>
            <p>You can edit this..!</p>

            <h2>Vehicle</h2>
            <Vehicle title="Toyota Corolla" description="Toyota corolla is the hoghest sold vehicle " />
            <Vehicle title="Toyota Landcruser" description="Toyota Landcruser is the hoghest sold vehicle " />
        </div>
    )
}

// define a type
interface VehicleType{
    title: string,
    description:string
}


// child components
function Vehicle(props: VehicleType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default App
