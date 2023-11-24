import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from "./pages"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index/>} path='/'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Register/>} path='/register'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
