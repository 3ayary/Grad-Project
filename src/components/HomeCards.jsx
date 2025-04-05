import React from 'react'

import { NavLink } from 'react-router-dom'
const HomeCards = (props) => {
  return (
    <div className="home">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <NavLink  to={`/${props.link}`}> <button>{props.button}</button></NavLink>
        
    </div>

  )
}

export default HomeCards