import { Routes, Route } from "react-router-dom";

import AdminPublic from "../../Protected/adminPublic";
import Layout from "../../pages/adminPage/Layout/Layout";
import LoginPage from "../../pages/adminPage/Login/LoginPage";
import UserList from "../../pages/adminPage/userList/userList";
import ArtistList from "../../pages/adminPage/ArtistList/ArtistList";
import AdmintProtect from "../../Protected/adminProtect";
import { Verification } from "../../components/adminComponents/Verification";
import Dashboard from "../../pages/adminPage/Dashboard/Dashborad";
import Notifications from "../../components/adminComponents/Notifications";

function AdminRoute() {
  return (
    <Routes>
      <Route element={<AdminPublic />}>
        <Route exact path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<AdmintProtect />}>
        <Route path="/" element={<Layout></Layout>}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/user" element={<UserList />} />
          <Route exact path="/artist" element={< ArtistList/>} />
          <Route exact path="/notification" element={< Notifications/>} />
          <Route path="/verification/:id" element={<Verification />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoute;
