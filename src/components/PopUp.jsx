import React from 'react'

const PopUp = () => {
  return (
    <div>
      <form className='login-card'>
        <h2>Login</h2>      
        
        <div>

          <input
            type="email"
            placeholder="Email"
            // value=
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <div>
          <input
            type="password"
            placeholder="Password"
          
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <button type="submit" >Login</button>
      </form>
    </div>
  )
}

export default PopUp