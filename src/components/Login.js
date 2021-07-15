import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles/Login.css";
import Title from "./Title";
import db from '../firebase.config';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users,setUsers] = useState([]);
    let usersList = []

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async() => {
        const response = db.collection('usersList');
        const data = await response.get();
        for (let i = 0; i < data.docs.length; i++){
               usersList.push(data.docs[i].data().username)
        }
    }



    function validateForm(){
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div className = "Login">
            <Title text = "hobex | Login"/>
            <Form onSubmit={handleSubmit}>
            <Form.Group size = 'lg' controlId = "text">
                <Form.Label>USERNAME: </Form.Label>
                <Form.Control
                autoFocustype = "text"
                value = {userName}
                onChange = {(e) => setUserName(e.target.value)}
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
            <Button type = "submit" disabled = {!validateForm()}>
                Login
            </Button>
            </form>
            </Form>
        </div>
    );
}