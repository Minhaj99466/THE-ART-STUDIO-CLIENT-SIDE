import { Routes,Route } from "react-router-dom"

import LoginPage from "../../pages/artistPage/Login/LoginPage"
import SignUpPage from "../../pages/artistPage/Signup/SignupPage"
import ArtistHome  from '../../pages/artistPage/Home/Homepage'
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
        <Route exact path='/' element={<ArtistHome/>}/> 
        <Route exact path='/home' element={<ArtistHome/>}/> 
        <Route exact path='/profile' element={<Profile/>}/> 
        <Route exact path='/addProfile' element={<AddProfile/>}/> 
        <Route exact path='/gallery' element={<Gallery/>}/> 
        </Route>
        </Route>
       
    </Routes>
  )
}

export default ArtistRoute
