import logo from './logo.svg';
import Prelogin from './components/Prelogin'
import Register from "./components/Register"
import DirectMessagePage from "./components/DirectMessagePage"
import RegisterSecondPage from "./components/RegisterSecondPage"
import RegisterThirdPage from "./components/RegisterThirdPage"
import './App.css';
import db from './firebase.config';
import Profile from './components/Profile';
// For testing purposes.




function App() {
  return (
    <div className="App">
      
      <Profile/>
      
    </div>
  );
}

export default App;
