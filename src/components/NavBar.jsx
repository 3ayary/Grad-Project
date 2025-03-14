import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {
const userState = useSelector((state)=>state.user.thestate)

  console.log(`navbar ${userState}`)


  return (
    
    <header className="head">
    <h1>The Real Estate</h1>

    <nav className="navbar">
    <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/"> <button>Home</button></NavLink>
         <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/items"> <button>Items</button></NavLink>
         <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to={ userState == false ? "/Login" : "/aboutus"}> <button>{ userState == false ? "Login" : "about us" }</button></NavLink>
          
    </nav>
  </header>
  )
}

export default NavBar




// <button>Items</button>

// <div>

// </div>