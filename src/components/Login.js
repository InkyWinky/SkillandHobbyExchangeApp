import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles/Login.css";
import Title from "./Title";
import db from '../firebase.config';

let usersList = []
const Login = ({loggedOn, setLoggedOn, username, setUsername}) => {
    const [inputUsername, setInputUsername] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async() => {
        const response = db.collection('loginInfo');
        const data = await response.get();
        for (let i = 0; i < data.docs.length; i++){
            usersList.push({user: data.docs[i].data().username, pass: data.docs[i].data().password})
        }
    }



    function validateForm(){
        for (let i = 0; i < usersList.length; i++){
            if (inputUsername === usersList[i].user && password === usersList[i].pass){
                return true;
            }
        }
        return false;
    }

    function handleSubmit(event){
        event.preventDefault();
        if (validateForm()){
            setUsername(inputUsername)
            setLoggedOn(true);
            console.log("TRUE")
        }
        else{
            console.log("FALSE")
        }

    }

    return (
        <div className = "Login">
            <Title text = "hobex | Login"/>
            <Form onSubmit={handleSubmit}>
            <Form.Group size = 'lg' controlId = "text">
                <Form.Label>USERNAME: </Form.Label>
                <Form.Control
                autoFocustype = "text"
                value = {inputUsername}
                onChange = {(e) => setInputUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group size = "lg" controlId = "password">
                <Form.Label> PASSWORD: </Form.Label>
                <Form.Control
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <form id="form-submit-button">
            <Button type = "submit" onClick = {(event) => {handleSubmit(event)}}>
                Login
            </Button>
            
            </form>
            </Form>
        </div>
    );
}
export default Login;