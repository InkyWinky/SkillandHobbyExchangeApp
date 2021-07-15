
import './styles/styles.css'
import React from 'react';
import {Link} from 'react-router-dom';
class LandingPage extends React.Component{
  render(){
      
  return (
    <div className="LandingPage">
  <div id = "butter">
            <nav className="navbar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Discover</a></li>
                    <li><a href="">Matches</a></li>
                    <li><a href="">Friends</a></li>
                    <li><a href="Register.js">Profile</a></li>
                </ul>
            </nav>
            <div className="whynot">
                <div className = "start">
                    <div className="title"><h1 className = "titleHeading">HobEx</h1>
                    <p className= "subheading">The power of <br/> exchange.</p></div>
<video id="earthVideo" src="0001-0250.mp4"></video>
</div>
</div>
   
        <div className="login-div">
            <img src="basketballsmall.png" alt="basketball" className="ballImage"/>
       
            <div className="signup-words"><p>Learn <span className="pink">anything</span> you want</p></div>
            <p className="inExchangeFor">in exchange for</p>
     
    </div>
        <div className="signup-div">
            <img src="soccerBallsmall.png" alt="soccer-ball" className = "ballImage"/>
        <div className="signup-words"><p>teaching something you <span className="pink">love.</span></p></div>
    </div>

        <div className="parallax">
            <div className="parallaxLayer parallaxLayer0">
                <img className = "footerImg" src="parallaxfooterBack.png" />    

            </div>
            <div className="parallaxLayer parallaxLayer1">
                <img className = "footerImg" src="parallaxfooterMidBack.png" />    
                
            </div>
            <div className=" parallaxLayer parallaxLayer2">
                <img className = "footerImg" src="parallaxfootermiddle.png" />
            </div>
            <div className="parallaxLayer parallaxLayer3">
                <img className = "footerImg" src="parallaxfooterFront.png" />
            </div>
            <div className="parallaxBase"><p className = "signUpPersuation">Start learning today</p>
            <Link className = "signUpBtn" to="/register">Sign up</Link></div>
            
        </div>
        
    
        <p className ="footer">Copyright 2021. All Rights Reserved. </p>
</div>

    </div>
  );
  }
}

export default LandingPage;
