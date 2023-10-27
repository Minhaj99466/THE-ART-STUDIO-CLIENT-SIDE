import Header from "../../../components/Common/UsercommonComponent/Header";
import Footer from "../../../components/Common/UsercommonComponent/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div className="  grid grid-rows-[4rem] overflow-x-hidden">
        <div className="sticky  top-0 z-50">
          <Header />
        </div>

        <div className=" ">
          <Outlet />
        </div>
        <div>
          <div className="h-28 w-screen bg-white"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
