import React, {useEffect, useState} from 'react'
import RegisterSecondPage from './RegisterSecondPage';
import RegisterThirdPage from './RegisterThirdPage';
import './styles/Register.css';
import Title from "./Title";
import db from '../firebase.config';
import Login from './Login';

let usernameList = []

const Register = (username, loggedOn, setUsername, setLoggedOn) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [wrongPassword, setWrongPassword] = useState(true)
    const [usernameTaken, setUsernameTaken] = useState(false)
    const [reference, setReference] = useState(null);

    
    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async() => {
        const response = db.collection('loginInfo');
        const data = await response.get();
        for (let i = 0; i < data.docs.length; i++){
               usernameList.push(data.docs[i].data().username)
        }
    }
    const addUserToDatabase = async(user, email_, pass) => {
        const res = await db.collection("loginInfo").add({
            username: user,
            email: email_,
            password: pass
        })
    }

    const [registrationStep, setRegistrationStep] = useState(1);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        for(let i=0; i<usernameList.length; i+=1)
        {
        if(event.target.value===usernameList[i]) 
            {
                setUsernameTaken(true)
                break;
            }
        else
        {
            setUsernameTaken(false)
        }}      
    }
    const checkUsername =  (event) => {
        for (let i = 0; i < usernameList.length; i++){
            if (username === usernameList[i]){
                setUsernameTaken(true);
                break;
            }
        }
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

    const checkAndGoToNextPage = () => {
        if (username.length > 0 && !usernameTaken && wrongPassword && passwordMatch){
            addUserToDatabase(username, email, password)
        setRegistrationStep(2);}
        else{
            alert("Something is wrong with your username/password.")
        }
    }



    return (
        <div style={{width:"100%", height:"100%"}}>
            {(registrationStep == 1 && 
            (<div style={{width:"100%", height:"100%"}}>
                   <Title text="hob" sup="ex"/>
                   <h2>Register!</h2>
                   <a onClick={()=>{setRegistrationStep(4)}}>or sign in!</a>
            <h4>To get started, you have to set up your login credentials!</h4>
            <form id="form">
                <label>USERNAME*:</label>     
                <input className="input-box" type="text" placeholder="Enter username." onChange={handleUsernameChange} onBlur = {checkUsername}></input>
                {usernameTaken == true && (<h4 className="warningMessage">Your username has been taken. Please try again.</h4>)}          
                <label>E-MAIL: (optional)</label>     
                <input className ="input-box" type="text" placeholder="Enter e-mail." onChange = {handleEmailChange}></input>          

                <div id="password-box">
                <div id="password-box-entry">
                <label>PASSWORD*:</label>     
                <input className ="input-box" type="password" placeholder="Enter password." onChange = {handlePasswordChange} onBlur= {checkPassword}></input> 
                {wrongPassword == false && (<h4 className="warningMessage">Your password does not meet the requirements.</h4>)}        
                <label>CONFIRM PASSWORD*:</label>     
                <input className ="input-box" type="password" placeholder="Confirm password."onChange = {handlePasswordConfirmChange} onBlur = {checkBothPasswords}></input>  
                {passwordMatch == false && (<h4 className="warningMessage">Your passwords do not match.</h4>)}        
                </div>
                    <div id="password-box-text">
                    *Passwords should contain atleast 2 numerical characters (0-9) and atleast 2 symbols <br></br>(! * / & # $...)
                    </div>
                    
                </div>
                <button onClick = {checkAndGoToNextPage} id="next-button" className="form-submit-button"><h2 id="button-text"> NEXT! </h2></button>

            </form>
                </div>))
                || (registrationStep == 2 && <RegisterSecondPage username={username} setUsername={setUsername} loggedOn = {loggedOn} setLoggedOn = {setLoggedOn} reference = {reference} setReference = {setReference}username = {username}setReg={setRegistrationStep}/>) || (registrationStep == 3 && <RegisterThirdPage username={username} setUsername={setUsername} loggedOn = {loggedOn} setLoggedOn = {setLoggedOn} reference = {reference} setReference = {setReference} setReg = {setRegistrationStep}/>) || (registrationStep == 4 && <Login loggedOn = {loggedOn} setLoggedOn = {setLoggedOn}/>)}
         
        </div>
    )
}

export default Register
