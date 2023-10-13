import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";

function ArtistPublic() {
    if (localStorage.getItem('ArtistToken')) {
        return <Navigate to="/artist"/>
        }
        
        console.log("return case ");
        return <Outlet/>
}

export default ArtistPublic