import React from 'react'
import Title from "./Title"
import "./styles/Mainpage.css"

const Mainpage = () => {
    return (
        <div style ={{width:"100%" ,height:"100%", display:'flex', flexDirection:'column'}}>
            <button style={{position:"absolute", top:"10px", left:"10px", width:"8%"}}className="form-submit-button"><h2 className="button-text">Logout</h2></button>
            <Title/>
            <button className="form-submit-button"><h2 className="button-text">Profile</h2></button>
            <button id="connectButton" className="form-submit-button"><h2 className="button-text">CONNECT</h2></button>
            <button className="form-submit-button"><h2 className="button-text">Friends List!</h2></button>
            


            
        </div>
    )
}

export default Mainpage
