import logo from './logo.svg';
import Prelogin from './components/Prelogin'
import Register from "./components/Register"
import RegisterSecondPage from "./components/RegisterSecondPage"
import RegisterThirdPage from "./components/RegisterThirdPage"
import LandingPage from "./components/LandingPage"
import db from './firebase.config';
// For testing purposes.



import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      

    <Switch>
   
<Route exact path="/register">
  <Register />
  </Route>
  <Route path="/landingPage">
      <LandingPage />
      </Route>
    </Switch>
  </div>
  </Router>
  
  );
}

export default App;
