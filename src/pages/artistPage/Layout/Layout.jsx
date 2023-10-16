import Navbar from '../../../components/artistComponents/commonComponents/header'
import Sidebar from '../../../components/artistComponents/commonComponents/sidebar';
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div className='h-screen grid grid-rows-[5rem] '>
        <div className="sticky top-0 z-50"> 
          <Navbar/> 
        </div>
        <div className='md:grid md:grid-cols-[18rem,1fr]'>
          
          <div className='invisible md:visible  '>
            <Sidebar/>
          </div>

          <div>

            <div className="me-4 my-3">
             <Outlet/>
            </div>

           

          </div>
        </div>
      </div>
        {/* <div className="grid grid-cols-2">
            <div className="w-52 h-screen bg-deep-orange-400 ">

            </div>
            <div className="w-52 h-screen bg-light-green-400">

            </div>
            
        </div> */}
        
    </>
  );
}

export default Layout;
