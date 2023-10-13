import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";

function ArtistProtect() {
    if (localStorage.getItem('ArtistToken')) {
        return <Outlet/>
        }
        
        console.log("Please Login ,pllos ");
        return <Navigate to='/artist/login'/>
}

export default ArtistProtect