import React from 'react'
import "./style/HomeCardsContainer.css"
const HomeCardsContainer = ({children}) => {
  return (
<div className='cardsContainer'>
    {children}
</div>
  )
}

export default HomeCardsContainer