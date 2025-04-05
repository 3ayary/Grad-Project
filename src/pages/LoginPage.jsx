import React from 'react'
import { useState } from 'react';
import"../components/style/LoginPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/UserSlice';


const LoginPage = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  





const navigate = useNavigate();

function handleLogin (){
  dispatch(login())
  navigate("/")
}





const logedin = email != '' 
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      logedin ?  handleLogin() : alert('access denied!')
     
    };
  
    return (<div className='login-container-page'>
      <form onSubmit={handleSubmit} className='login-card'>
        <h2>Login</h2>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        
        <button type="submit" >Login</button>
      </form>
      </div>
      )
}


export default LoginPage
