import logo from './logo.svg';
import Prelogin from './components/Prelogin'
import Register from "./components/Register"
import DirectMessagePage from "./components/DirectMessagePage"
import RegisterSecondPage from "./components/RegisterSecondPage"
import RegisterThirdPage from "./components/RegisterThirdPage"
import './App.css';
import db from './firebase.config';
import Profile from './components/Profile';

import {useState} from 'react';
// For testing purposes.




function App() {
  const [loggedOn, setLoggedOn] = useState(false);



  return (
    <div className="App">
      {!loggedOn  /* && <LandingPage/>  LANDING PAGE LINKS TO LOGIN/REGISTER. REGISTER LINKS TO LOGIN. LOGIN LOGS ON.*/}  
      {loggedOn /*&& <Mainpage/> */}
    </div>
  );
}

export default App;
