import React from 'react'
import warning from'../../public/assets/warning.png'
import {Link} from 'react-router-dom'
import"../components/style/NotFoundPage.css"
const NotFoundPage = () => {

  return (
<div className='NotFound'>
  <img src={warning} />
  <h1>Page Not Found</h1>



  <h3>Error "404"</h3>
  <Link to={'/'}><button>Go Back</button></Link>
</div>
  )
}

export default NotFoundPage