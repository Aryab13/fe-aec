import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from "./pages"
import Login from "./pages/login"
import Register from "./pages/register"
import LiveSession from './pages/live-session'
import DetailLs from './pages/detail-ls'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index/>} path='/'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<LiveSession/>} path='/ls'/>
        <Route element={<DetailLs/>} path='/detaills/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
