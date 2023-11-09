import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import UserRoute from "./routes/userRoute/userRoute"
import ArtistRoute from "./routes/artistRoute/artistRoute"
import AdminRoute from "./routes/adminRoute/adminRoute"
import './App.css'
import ChatUserProvider from "./components/userComponents/ChatComponents/components/Context/ChatProvider"
import ChatProvider from "./components/artistComponents/Chat/Components/Context/ChatProvider"
function App() {
  return (
    <Router>
      <Routes>
       {/* <Route path='/*' element={<UserRoute/>} /> */}
       <Route path='/*' element={<ChatUserProvider><UserRoute/></ChatUserProvider>} />
       {/* <Route path='/artist/*' element={<ArtistRoute/>} /> */}
       <Route path='/artist/*' element={<ChatProvider><ArtistRoute/></ChatProvider>} />
       <Route path='/admin/*' element={ <AdminRoute/> } />
      </Routes>
    </Router>
  )
}

export default App
