
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
 
if(email == 'admin@admin.com'&& password == 'admin'){
  navigate('/dashboard');
  alert('Welcome Admin!');
   dispatch(login())
}
else if(email == 'user@user.com'&& password == 'user'){
  navigate('/');
  alert('Welcome User!');
   dispatch(login())
}else{
  alert('Invalid credentials, please try again.');
  setEmail('');
  setPassword('');
}

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
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        
        <button type="submit" >Login</button>
      </form>
      </div>
      )
}


export default LoginPage
