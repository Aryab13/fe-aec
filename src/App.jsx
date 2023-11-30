import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from "./pages"
import Login from "./pages/login"
import Register from "./pages/register"
import LiveSession from './pages/live-session'
import DetailLs from './pages/detail-ls'
import ForgotPass from './pages/forgot-pass'
import Community from './pages/community'
import Article from './pages/article'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index/>} path='/'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<ForgotPass/>} path='/forgotpass'/>
        <Route element={<LiveSession/>} path='/ls'/>
        <Route element={<DetailLs/>} path='/detaills/:id'/>
        <Route element={<Community/>} path='/community'/>
        <Route element={<Article/>} path='/article'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
