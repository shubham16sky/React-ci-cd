import React from 'react'
import useLocalStorage from 'use-local-storage'

import './index.css'

 function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const [mode,setMode] = useLocalStorage('mode' ? 'Dark theme' : 'Light theme')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    
    const tmp = mode === 'Light theme' ? 'Dark theme' : 'Light theme';
    // var tmp = document.getElementById("theme").innerHTML;
     if(tmp === 'Dark theme') {
        document.getElementById("theme").innerHTML = 'Light theme';
        setMode(tmp)

     }
     else {
        document.getElementById("theme").innerHTML = 'Dark theme';
        setMode(tmp)

     }
  }

  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1>Login</h1>
	
        <div className='container'>
          <div className='top'>
            <i class='fab fa-google'></i>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-linkedin'></i>
            <i class='fab fa-twitter-square'></i>
            <i class='fab fa-apple'></i>
          </div>
          <p className='divider'><span>Or</span></p>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox'  />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
        <div className='theme-toggle'>
        <i onClick={switchTheme} class='fas fa-toggle-on'></i>
          <h2 id='theme'> </h2>
          
        </div>
      </div>
    </div>
  );
}

export default App;
