import React from 'react'

const PopUp = () => {
  return (
    <div>
      <form className='pop-card'>
          
        
        <div>

          <input
            type="email"
            placeholder="Email"
            // value=
            onChange={(e) => (e.target.value)}
          />
        </div>
  
        <div>
          <input
            type="text"
          placeholder= "Phone Number"
            onChange={(e) => (e.target.value)}
          />
        </div>
  
        <button type="submit" >Send</button>
      </form>
    </div>
  )
}

export default PopUp