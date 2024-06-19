
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Section2/Home'
import Navbar from './assets/Components/Section1/Navbar'
import Login from './assets/Components/Login/Login'
import SignUp from './assets/Components/Signup/Signup'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>


    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
