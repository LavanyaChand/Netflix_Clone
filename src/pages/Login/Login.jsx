import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';
// import Footer from '../../components/Footer/Footer';

const Login = () => {

  const [sign, setSign] = useState("Sign In"); // By default you will first see Sign In page

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault(); // It will not reload the webpage when we submit the form
    setLoading(true);
    if(sign === "Sign In"){
      await login(email, password);
    }
    else{
      await signup(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading
    ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
    : 
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{sign}</h1>
        <form action="">
          {
            sign === "Sign Up" ? ( // If true then it will display "Full Name" bar
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                type="text"
                placeholder="Full Name"
              />
            ) : (
              <></>
            ) // else it will be empty
          }
          <input
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Email address"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
          />

          <button onClick={user_auth} type='submit'>{sign}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {sign === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSign("Sign Up");
                }}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSign("Sign In");
                }}
              >
                Sign in now.
              </span>
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;