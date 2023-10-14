import { Routes, Route } from "react-router-dom";

import AdminPublic from "../../Protected/adminPublic";
import Layout from "../../pages/adminPage/Layout/Layout";
import LoginPage from "../../pages/adminPage/Login/LoginPage";
import HomePage from "../../pages/adminPage/Home/Dashboard";
import UserList from "../../pages/adminPage/userList/userList";
import ArtistList from "../../pages/adminPage/ArtistList/ArtistList";
import AdmintProtect from "../../Protected/adminProtect";

function AdminRoute() {
  return (
    <Routes>
      <Route element={<AdminPublic />}>
        <Route exact path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<AdmintProtect />}>
        <Route path="/" element={<Layout></Layout>}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/user" element={<UserList />} />
          <Route exact path="/artist" element={< ArtistList/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoute;
