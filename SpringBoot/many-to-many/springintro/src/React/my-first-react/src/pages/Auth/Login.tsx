import {useState} from "react";
import axios from "axios";
import {useAuth} from "../../context/AuthContext.tsx";

function Login() {

    const {login} = useAuth();

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError]=useState<string>("")

    async function submit() {
        // disable auto submit
        event.preventDefault()

        if (username === "" || password ===""){
            setError("Username and Password are required.!")
        }

        const data = {
            username: username,
            password:password
        }

        try{
            const response = await axios.post("http://localhost:8080/auth/login",data);
            login(response.data)
            console.log(response)
        }catch (error){
            setError("Error at Login.!");
        }

    }

    return (
        <div className="p-10 border border-gray-50 rounded-lg">

            <div className="max-w-[600px] p-5 shadow rounded-lg mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-semibold">Login</h1>
                </div>

                <form onSubmit={submit}>
                    <div className="mb-4 mt-8">
                        <label className="block mb-1 text-start">Username</label>
                        <input type="text" onChange={function (event) {
                            setUsername(event.target.value);
                            setError("")
                        }}
                               className="block w-full p-2 border border-gray-50 rounded-lg "
                               placeholder="Username"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-start">Password</label>
                        <input type="password" onChange={function (event) {
                            setPassword(event.target.value);
                            setError("")
                        }}
                               className="block w-full p-2 border border-gray-50 rounded-lg"
                               placeholder="Password"/>
                    </div>

                    {error && <div className="text-sm text-red-600">{error}</div>}

                    <div>
                        <button type="submit" className="bg-sky-400 text-black px-4 py-2 rounded-lg
                        w-full hover:bg-sky-600 mt-10">
                            Login
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )

}

export default Login