import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";

function userProtect() {
    if (localStorage.getItem('UserToken')) {
        return <Outlet/>
        }
        
        console.log("Please Login ,pllos ");
        return <Navigate to='/login'/>
}

export default userProtect