import {useAuth} from "../context/AuthContext.tsx";
import {Navigate, Outlet} from "react-router-dom";

function ProtectedRout(){

    const {isAuthenticated} = useAuth()

    if (isAuthenticated){
        return <Outlet/>
    }else {
        return (
            <Navigate to="/auth/login"/>
        )
    }

}

export default ProtectedRout