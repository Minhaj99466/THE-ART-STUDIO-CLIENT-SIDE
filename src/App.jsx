import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import UserRoute from "./routes/userRoute/userRoute"
import ArtistRoute from "./routes/artistRoute/artistRoute"
import AdminRoute from "./routes/adminRoute/adminRoute"

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/*' element={<UserRoute/>} />
       <Route path='/artist/*' element={<ArtistRoute/>} />
       <Route path='/admin/*' element={ <AdminRoute/> } />
      </Routes>
    </Router>
  )
}

export default App
