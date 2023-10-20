import Navbar from "../../../components/Common/AdmincommonComponent/Navbar";
import Sidebar from "../../../components/Common/AdmincommonComponent/Sidebar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
     
     <div className='h-screen grid grid-rows-[5rem] '>
        <div> 
          <Navbar/> 
        </div>
        <div className='md:grid md:grid-cols-[18.7rem,1fr]'>
          
          <div className='invisible md:visible'>
            <Sidebar/>
          </div>

          <div>

            <div className='h-full '>
             <Outlet/>
            </div>

            

          </div>
        </div>
      </div>
   
     
    </>
  );
}

export default Layout;
