import Header from "../../../components/Common/UsercommonComponent/Header";
import Footer from "../../../components/Common/UsercommonComponent/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div className="h-screen grid grid-rows-[4rem] ">
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <div>
          <Outlet />
        </div>

        <div>
            <div className="h-28 bg-white">

            </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Layout;
