import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <header className="head">
    <h1>The Real Estate</h1>

    <nav className="navbar">
    <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/"> <button>Home</button></NavLink>
         <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/items"> <button>Items</button></NavLink>
         <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/Login"> <button>Login</button></NavLink>
          
    </nav>
  </header>
  )
}

export default NavBar




// <button>Items</button>

// <div>

// </div>