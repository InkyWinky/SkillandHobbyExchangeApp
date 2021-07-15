import logo from './logo.svg';
import Prelogin from './components/Prelogin'
import Register from "./components/Register"
import DirectMessagePage from "./components/DirectMessagePage"

import './App.css';
import db from './firebase.config';
import Profile from './components/Profile';
import Mainpage from "./components/Mainpage";

import {useState} from 'react';
// For testing purposes.




function App() {
  const [loggedOn, setLoggedOn] = useState(false);
  const [username, setUsername] = useState("");

  const logout = () => {
    setLoggedOn(false);
  }

  return (
    <div className="App">
      {!loggedOn   && <Register username={username} setUsername={setUsername} loggedOn = {loggedOn} setLoggedOn = {setLoggedOn}/>}  
      {loggedOn && <Mainpage username = {username} logout={logout}/> }

    </div>
  );
}

export default App;
