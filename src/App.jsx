import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
 import { ToastContainer } from 'react-toastify';
import SquidGame from './pages/SquidGame/SquidGame';

const App = () => {

  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const path = window.location.pathname;

      if (user) {
        console.log("Logged In");
        // Only redirect to home if already on /login
        if (path === "/login") {
          navigate("/");
        }
      } else {
        console.log("Logged Out");
        // Only redirect to /login if not already there
        if (path !== "/login") {
          navigate("/login");
        }
      }
    });

    return () => unsubscribe();
  }, []);


  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if(user){ //If the user is logged in then they should be led to home page
  //       console.log("Logged In");
  //       navigate('/');
  //     }
  //     else{
  //       console.log("Logged out");
  //       navigate('/login')
  //     }
  //   });
  // },[])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/squidgame' element={<SquidGame />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App;