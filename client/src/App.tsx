import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from './pages/login/Login'
import Register  from './pages/register/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/LeftBar';
import { DarkModeContext } from './context/darkModeContext';
import "./style.scss"
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const App = () => {

  const { currentUser } = useContext(AuthContext);
  
  const {darkMode} = useContext(DarkModeContext);

  const queryClient = new QueryClient();


  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar/>
          <div style={{display:"flex"}}>
            <LeftBar/>
            <div style={{flex: "9"}}>
              <Outlet/>
            </div>
            
            <RightBar/>
          </div>
        </div>

      </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({ children } : { children: React.ReactNode} ) => {
    if(!currentUser) {
      return <Navigate to="login"/>
    }
    return <>{children}</>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route index element={<Home />} />
          <Route path="profile/:id" element={<Profile/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App
