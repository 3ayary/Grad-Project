import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/UserSlice'


const NavBar = () => {
const userState = useSelector((state)=>state.user.thestate)
const dispatch = useDispatch()
  console.log(`navbar ${userState}`)


  return (
    
    <header className="head">
    <h1>The Real Estate</h1>

    <nav className="navbar">
    <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/"> <button>Home</button></NavLink>
         <NavLink className={({isActive})=>isActive ? 'nav-linksActive':''} to="/items"> <button>Items</button></NavLink>
         <NavLink  to={ userState == false ? "/Login" : "/"} onClick={userState && dispatch(logout)}> <button>{ userState == false ? "Login" : "Logout" }</button></NavLink>
          
    </nav>
  </header>
  )
}

export default NavBar




// <button>Items</button>

// <div>

// </div>