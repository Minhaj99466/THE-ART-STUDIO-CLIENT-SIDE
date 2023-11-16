import { Routes,Route } from "react-router-dom"

import LoginPage from "../../pages/artistPage/Login/LoginPage"
import SignUpPage from "../../pages/artistPage/Signup/SignupPage"
import Notification  from '../../pages/artistPage/Notification/Notifications'
// import ArtistProtect from "../../Protected/artistProtect"
import ArtistPublic from "../../Protected/artistPublic"
import Layout from "../../pages/artistPage/Layout/Layout"
import ArtistProtect from "../../Protected/artistProtect"
import EmailVerify from "../../components/artistComponents/ArtistVerify"
import Profile from "../../pages/artistPage/Profile/Profile"
import Forget from '../../components/artistComponents/Forget'
import PasswordConfirm from '../../components/artistComponents/PasswordConfirmation'
import AddProfile from '../../components/artistComponents/AddProfile'
import Gallery from "../../components/artistComponents/Gallery"

import BookingsPage from "../../pages/artistPage/Bookings/BookingsPage"
import ChatList from "../../components/artistComponents/Chat/ChatList"
import Notfound from "../../components/artistComponents/ErrorPage/404"
import Dashboard from "../../pages/artistPage/Dashboard/Dashborad"




function ArtistRoute() {
  return (
    <Routes>
      <Route element={<ArtistPublic/>} >
        <Route exact path="/login" element = {<LoginPage/>} />
        <Route exact path="/signup" element = {<SignUpPage/>} />
        <Route exact path='/forget' element={<Forget/>}/> 
        <Route path="/:id/password/:token" element={<PasswordConfirm/>}/>
        <Route path="/:id/verify/:token" element={<EmailVerify/>}/>
        </Route>
     


        <Route element={<ArtistProtect/>}>
        <Route path="/"  element={<Layout></Layout>}>
        <Route exact path='/' element={<Dashboard/>}/> 
        <Route exact path='/dashboard' element={<Dashboard/>}/> 
        <Route exact path='/profile' element={<Profile/>}/> 
        <Route exact path='/addProfile' element={<AddProfile/>}/> 
        <Route exact path='/gallery' element={<Gallery/>}/> 
        <Route exact path='/notifications' element={<Notification/>}/> 
        <Route exact path='/notifications' element={<Notification/>}/> 
        <Route exact path='/bookings' element={<BookingsPage/>}/> 
        <Route exact path='/chats' element={<ChatList/>} />
        </Route>
        </Route>
        <Route path='*' element={<Notfound/>} />  
       
    </Routes>
  )
}

export default ArtistRoute
