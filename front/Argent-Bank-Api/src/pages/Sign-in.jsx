import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../main.css'
import { Nav } from '../component/NavBar'
import { getProfile, signIn } from '../api'
import { login } from '../store/user'


function SignIn() {
const dispatch = useDispatch()
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const handleSignin= async(event)=>{
  event.preventDefault()
try {
  await signIn(username,password)
  let user = await getProfile()
  dispatch(login(user.body))
 
  navigate('/user')
} catch (error) {
  console.log('wrong sign in')
}
}
  return (
    <>
      <div>
        <Nav />
        <main class="main bg-dark">
          <section class="sign-in-content">
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <div class="input-wrapper">
                <label for="username">Username</label
                ><input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
              </div>
              <div class="input-wrapper">
                <label for="password">Password</label
                ><input type="password" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div class="input-remember">
                <input type="checkbox" id="remember-me" /><label for="remember-me"
                >Remember me</label
                >
              </div>

              <button class="sign-in-button"onClick={(e)=>handleSignin(e)}>Sign In</button>

            </form>
          </section>
        </main>
        <footer class="footer">
          <p class="footer-text">Copyright 2020 Argent Bank</p>
        </footer>


      </div>

    </>
  )
}


export default SignIn
