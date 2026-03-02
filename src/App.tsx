import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

function App() {
 // const [count, setCount] = useState(0)

  return (
 
    <BrowserRouter>
     <Navbar/>
    <Routes>     
      <Route path = "/blog" element = {<BlogIndex/>}/>
      <Route path = "/blog/:slug" element = {<BlogPost/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/admin"
       element = {
       <ProtectedRoute>
        <Admin/>
       </ProtectedRoute>
      }
      />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
