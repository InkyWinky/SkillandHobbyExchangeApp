import React from 'react'
import './styles/Register.css';
import Title from "./Title";
const Register = () => {
    return (
        <div>
            <Title text="hobex | Register"/>
            <h4>To get started, you have to set up your login credentials!</h4>

            <form id="form">
                <label>USERNAME:</label>     
                <input type="text"></input>           
            </form>
        </div>
    )
}

export default Register
