import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";

function AdmintProtect() {
    if (localStorage.getItem('AdminToken')) {
        return <Outlet/>
        }
        
        console.log("Please Login ,pllos ");
        return <Navigate to='/admin/login'/>
}

export default AdmintProtect