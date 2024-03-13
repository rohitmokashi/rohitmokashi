import React from 'react';
import "./Login.scss";

function Login() {
    
    const tooglePassword = () => {
      var passwordElement = document.getElementById("password");
      if (passwordElement.type === "password") {
        passwordElement.type = "text";
      } else {
        passwordElement.type = "password";
      }
    }
    

    return (
        <form className='login-form'>
            <div>
                <label htmlFor="email">Username</label>
                <input type="email" id="email" value={"admin"} required disabled />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
            </div>
            <div id='rememberDiv' className='remember-div'>
                <input id="remember" type="checkbox" onClick={tooglePassword} />
                <label >Show Password</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;