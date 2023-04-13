import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Detail from './Detail'
import Login from './Login'

function AppRoutes(){
  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/home" exact element={<Home />}/>
      <Route path="/detail/:matricula" element={<Detail />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  )
}

export default AppRoutes