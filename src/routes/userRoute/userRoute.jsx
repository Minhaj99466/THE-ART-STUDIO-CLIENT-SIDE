import { Routes, Route } from "react-router-dom";
import Signup from "../../pages/userPage/Signup/SignuPage";
import Home from "../../pages/userPage/Home/Home";
import Login from "../../pages/userPage/Login/LoginPage";
import UserPublic from "../../Protected/userPublic";
import UserProtect from "../../Protected/userProtected";
import EmailVerify from "../../components/userComponents/EmailVerify";
import Forget from "../../components/userComponents/Forget";
import PasswordConfirm from "../../components/userComponents/PasswordConfirm";
import Layout from "../../pages/userPage/Layout/Layout";
import ExplorePage from "../../pages/userPage/ExplorePage/ExplorePage";
import SingleView from "../../pages/userPage/SingleView/SingleView";
// import Dummy from '../../components/userComponents/SIngleProfileComponents/SinGleProfilePost'
import BookNow from "../../pages/userPage/BookNow/BookNowPage";
import Success  from "../../pages/userPage/Success/success";
import ProfileCard from "../../pages/userPage/Profile/Profile";
import ChatList from "../../components/userComponents/ChatComponents/ChatList";
import Notfound from "../../components/userComponents/Notfound";
// import ChatList from '../components/user/Chat/ChatList'

function userRoute() {
  return (
    <Routes>
      <Route element={<UserPublic />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route
          path="/users/:id/password/:token"
          element={<PasswordConfirm />}
        />
      </Route>

      <Route path="*" element={<Notfound />} />

      <Route path="/" element={<Layout></Layout>}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/singleView/:id" element={<SingleView />} />

        <Route element={<UserProtect />}>
          <Route path="/booknow/:id/:from/:to" element={<BookNow />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<ProfileCard />} />
          {/* <Route path="/order" element={<OrderList/>}/> */}
          <Route path="/chats" element={<ChatList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default userRoute;
