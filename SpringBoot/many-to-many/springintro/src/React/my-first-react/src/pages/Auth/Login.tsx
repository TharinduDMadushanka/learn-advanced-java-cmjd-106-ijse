function Login(){

    return(
        <div className="p-10 border border-gray-50 rounded-lg">

            <div className="max-w-[600px] p-5 shadow rounded-lg mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-semibold">Login</h1>
                </div>

                <form>
                    <div className="mb-4 mt-8">
                        <label className="block mb-1 text-start">Username</label>
                        <input type="text" className="block w-full p-2 border border-gray-50 rounded-lg "
                               placeholder="Username"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-start">Password</label>
                        <input type="password" className="block w-full p-2 border border-gray-50 rounded-lg"
                               placeholder="Password"/>
                    </div>

                    <div >
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