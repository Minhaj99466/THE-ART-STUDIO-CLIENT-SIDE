import Navbar from "../../../components/adminComponents/commonComponent/Navbar";
import Sidebar from "../../../components/adminComponents/commonComponent/Sidebar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
     
      <div className='h-screen grid grid-rows-[4rem] '>
        <div className="sticky top-0 z-50"> 
          <Navbar/> 
        </div>
        <div className='md:grid md:grid-cols-[18rem,1fr]'>
          
          <div className='invisible md:visible  '>
            <Sidebar/>
          </div>

          <div>

            <div className="">
             <Outlet/>
            </div>

           

          </div>
        </div>
      </div>
   
     
    </>
  );
}

export default Layout;
