import React from 'react'
import Items from '../components/Items'
import Welcome from '../components/Welcome'
import HomeCards from '../components/HomeCards'
import JobsContainer from '../components/JobContainer'
import HomeCardsContainer from '../components/HomeCardsContainer'



const HomePage = () => {

  return (
 <>
 
 <Welcome/>

 <HomeCardsContainer>
  <HomeCards title='Find Property' body='Find Property that you need' button='Find More' link='items'/>
  <HomeCards title='Login' body='Get Offers That Fit your Requires' button='Login' link='login'/>
 </HomeCardsContainer>

 <JobsContainer>
 <Items isHome={true}/>
 </JobsContainer>

 
 </>
  )
}

export default HomePage