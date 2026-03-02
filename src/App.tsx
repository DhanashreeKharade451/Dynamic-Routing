import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { AuthProvider } from './context/AuthContext';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';

function App() {
 // const [count, setCount] = useState(0)

  return (
   <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path = "/blog" element = {<BlogIndex/>}/>
      <Route path = "/blog/:slug" element = {<BlogPost/>}/>
      <Route path = "/logib" element = {<Login/>}/>
      <Route path = "/admin"
       element = {
       <ProtectedRoute>
        <Admin/>
       </ProtectedRoute>
      }
      />
    </Routes>
    </BrowserRouter>
   </AuthProvider>
  )
}

export default App
