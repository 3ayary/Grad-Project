import Items from '../components/Items'
import Welcome from '../components/Welcome'
import HomeCards from '../components/HomeCards'
import JobsContainer from '../components/JobContainer'
import HomeCardsContainer from '../components/HomeCardsContainer'
import { useSelector } from 'react-redux'


const HomePage = () => {
  const userState = useSelector((state)=>state.user.thestate)
  return (
 <>
 
 <Welcome/>

 <HomeCardsContainer>
  <HomeCards title='Find Property' body='Find Property that you need' button='Find More' link='items'/>
  { userState == false ? (<HomeCards title='Login' body='Get Offers That Fit your Requires' button='Login' link='login'/>):(<HomeCards title='about us' body='know more about our team' button='about us' link='aboutus'/>)}
 </HomeCardsContainer>

 <JobsContainer>
 <Items isHome={true}/>
 </JobsContainer>

 
 </>
  )
}

export default HomePage