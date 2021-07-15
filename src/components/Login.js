import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles/Login.css";
import Title from "./Title";


export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return userName.length > 0 && password.length > 0;
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