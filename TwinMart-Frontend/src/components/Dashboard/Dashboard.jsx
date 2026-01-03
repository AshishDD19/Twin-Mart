import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';

function Dashboard() {
    const loggedIn = localStorage.getItem("loggedIn");
    const navigate = useNavigate();

    
    const handleLogout = ()=>{
        localStorage.removeItem("loggedIn");
        navigate("/");
    }

  return (
    <div>
        {/* <Navbar/> */}
        {/* <h1>Dashboard</h1> */}
        <ExploreMenu/>  
        <Product/>
        {/* <button className='bg-red-500 text-white rounded-2xl hover:bg-red-700' onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default Dashboard
