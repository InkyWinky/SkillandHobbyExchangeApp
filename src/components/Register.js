import React, {useEffect, useState} from 'react'
import './styles/Register.css';
import Title from "./Title";
const Register = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [wrongPassword, setWrongPassword] = useState(true)
    const [usernameTaken, setUsernameTaken] = useState(false)
    let x = ['Taylor','Geng','Incy','Sam','Peam'] 

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        for(let i=0; i<x.length; i+=1)
    
        if(event.target.value===x[i]) 
            {
                setUsernameTaken(true)
                break;
            }
        else
        {
            setUsernameTaken(false)
        }      
    }
    const checkUsername =  (event) => {
        console.log(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    }

    const checkPassword = () => {
        let intCount = 0;
        let symbolCount = 0;
        for (let i = 0; i < password.length; i++){
            if (password[i] >= "0" && password[i] <= "9") {
                intCount += 1;
            }
            else if (password[i] >= "a" && password[i] <= "z"){
            }
            else if (password[i] >= "A" && password[i] <= "Z"){

            }
            else {
                symbolCount += 1;
            }
        }
        if (symbolCount >=2 && intCount >=2)
        {
            setPasswordValid(true)
            setWrongPassword(true)
        }
        else 
        {
            setWrongPassword(false)
        }
    }

    const checkBothPasswords = () => {
        if (password === passwordConfirm){
            console.log("YES")
            setPasswordMatch(true)
        }
        else {
            console.log("NO")
            setPasswordMatch(false)
        }
    }




    return (
        <div>
            <Title text="hobex | Register"/>
            <h4>To get started, you have to set up your login credentials!</h4>
            <form id="form">
                <label>USERNAME:</label>     
                <input className="input-box" type="text" placeholder="Enter username." onChange={handleUsernameChange} onBlur = {checkUsername}></input>
                {usernameTaken == true && (<h4 className="warningMessage">Your username has been taken. Please try again.</h4>)}          
                <label>E-MAIL:</label>     
                <input className ="input-box" type="text" placeholder="Enter e-mail." onChange = {handleEmailChange}></input>          

                <div id="password-box">
                <div id="password-box-entry">
                <label>PASSWORD:</label>     
                <input className ="input-box" type="text" placeholder="Enter password." onChange = {handlePasswordChange} onBlur= {checkPassword}></input> 
                {wrongPassword == false && (<h4 className="warningMessage">Your password does not meet the requirements.</h4>)}        
                <label>CONFIRM PASSWORD:</label>     
                <input className ="input-box" type="text" placeholder="Confirm password."onChange = {handlePasswordConfirmChange} onBlur = {checkBothPasswords}></input>  
                {passwordMatch == false && (<h4 className="warningMessage">Your passwords do not match.</h4>)}        
                </div>
                    <div id="password-box-text">
                    *Passwords should contain atleast 2 numerical characters (0-9) and atleast 2 symbols <br></br>(! * / & # $...)
                    </div>
                    
                </div>
                <button id="form-submit-button"><h2 id="button-text"> NEXT! </h2></button>
            </form>
        </div>
    )
}

export default Register
