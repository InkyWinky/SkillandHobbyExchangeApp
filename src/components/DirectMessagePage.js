import React, {useState} from 'react'
import "./styles/DirectMessagePage.css"
import Title from './Title'
import ChatBox from "./ChatBox"



const DirectMessagePage = ({username, returnBack}) => {
    // Get info about current user
    // const getUserInfo = () => {
    // }

    // Get the Friends List
    // const getFriendsList = () => {

    // }

    // Get Friend's Message List
    // const getMessageList = (username) => {

    //}

    // EXAMPLE || 
    // let friendsList = ["Geng","Peam","Sam","Incy"]
    // 
    //



    return (
        <div id="page">
            <div id="titleContainer">
                <h2 id="title">hob<sup>ex</sup></h2>
            </div>
            <div id="communicationContainer">
                <div id="communicationBox">
                    <ChatBox username={username}/>
                    <button onClick={() => {console.log(username)}}>USER</button>
                </div>
            </div>

        </div>
    )
}

export default DirectMessagePage
