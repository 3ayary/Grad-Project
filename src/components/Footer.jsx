import React from 'react'

import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  return (
<div className="footer">


        <div className="Links">
       <NavLink to="aboutus" className="footbutton"> <button>Contact Us</button></NavLink>

        </div>
            <div className="CreatedBy">
            created by<NavLink to="aboutus" className="teambutton"> <button>OurTeam</button></NavLink>   
            </div>
    </div>
  )
}

export default Footer