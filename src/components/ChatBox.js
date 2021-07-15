import React, {useState, useEffect} from 'react'
import "./styles/ChatBox.css"
import io from 'socket.io-client'
import clone from 'just-clone'
import {Button} from '@material-ui/core'

// TESTING PURPOSES
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let test = 0;

  let friendsChat = [{username: "14", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "15", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "16", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "17", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "18", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "19", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "20", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "21", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "22", messages: [{sender: "YOU",message: "HI"}, {sender:"14",message:"Hello!"}]},{username: "ItsMe", messages: [{sender: "YOU",message: "Hello what's up!"}, {sender:"ItsMe",message:"Hello!"}]}]
const ChatBox = (props) => {

    // function that retrieves this users's ALL chats. AND FRIENDS
    
    const [username, setUsername] = useState(String(getRandomInt(22)))
    const [socket, setSocket] = useState(io('http://localhost:5000', { transports : ['websocket'] }))
    const [message, setMessage] = useState("")

    // messageList most likely to be loaded from the database.
    // loaded for each person FROM the database
    const [messageList, setMessageList] = useState([])
    const [connectTo, setConnectTo] = useState("")

    

    // EXAMPLE
    const connect = (user) => {
        socket.emit("connectToUser", user);
        setConnectTo(user)


        
            
    };
        //get MSG List from Database
    const findIndexInFriendsChat = (name) => {
        for (let i = 0; i < friendsChat.length; i++){
            if (friendsChat[i].username === name){
                return i
            }
        }
        return null;
    }

    useEffect(() => {
        socket.emit("userConnected", username);
    }, [])

    useEffect(() => {
        getMessages()
    }, [connectTo])

    

    useEffect(() => {

        socket.on('you-chat-message', (data) => {
            let friendIndex = findIndexInFriendsChat(connectTo);
            if (friendIndex !== null){
                let msgL = Array.from(messageList);
                if (msgL[msgL.length-1].message !== data){
                    msgL.push({sender: "YOU", message: data})
                    setMessageList(msgL)
                    console.log(data)
            friendsChat[friendIndex].messages.push({sender: "YOU", message: data})
                }
            }
        })

        socket.on('chat-message', (data) => {
            let friendIndex = findIndexInFriendsChat(data[1]);
            if (friendIndex !== null){
            friendsChat[friendIndex].messages.push({sender: data[1], message: data[0]})
            if (connectTo.search(data[1]) !== -1){
                let msgL = Array.from(messageList);

                if (msgL[msgL.length-1].message !== data[0]){
                    msgL.push({sender: data[1], message: data})
                    console.log(data)
                    setMessageList(msgL)
                }
                else{
                    console.log("IT WAS EQUAL OMG")
                }
            }
            }

    }
    
    )}, [messageList])


    const handleMessageSubmit = (e) =>{
        e.preventDefault()
        socket.emit('send-chat-message', message)
        setMessage("")
    }

    const getMessages = () => {
        let friendIndex = findIndexInFriendsChat(connectTo);
        if (friendIndex !== null){
            setMessageList(friendsChat[friendIndex].messages)
        }
    }



    return (
        <div id="chatBox">
            <div id="friendsList">
                {username}
                <h1>Friends ({friendsChat.length})</h1>
                

                {friendsChat.map((item) => {
                    return(<h3 key={item.username} className="friendsName"onClick = {()=>{connect(item.username)}}>{item.username}</h3>)
                })}
            </div>
            <div id="chat">
                <h1>{connectTo}</h1>
                <div id="messages">
                    {messageList.map((item, index) => {return(<span key={index}><b key={index}>{item.sender}</b>: {item.message}<br></br></span>)})}
                </div>
                <div id="send">
                    <div id="send-container">
                        <input type="text" autoComplete="off" id="message-input" value={message} onChange={(e) => setMessage(e.target.value)}></input>
                        <button onClick={handleMessageSubmit} id="send-message-button" className="form-submit-button" >
                        <h2 className="button-text">Send</h2>
                        </button>   
                    </div>
                </div>
                {/* <input type="text" value={connectTo} onChange={(e) => setConnectTo(e.target.value)}></input>
                <button onClick={() => {console.log(messageList)}}>MESSAGE LIST</button>
                <button onClick={() => {console.log(friendsChat)}}>FRIENDS CHAT</button>
                <button onClick={() => {socket.emit("test")}}>TEST</button>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <button onClick={() => {connect(connectTo)}}>CONNECT</button> */}
        {/* <input type="text" id="message-input" value={connectTo} onChange={(event) => setConnectTo(event.target.value)}></input>
        <button onClick={connect}>CONNECT</button>
        
        
        <button onClick={() => {let x = Array.from(messageList);x.push("ADDED");setMessageList(x)}}>ADD TOMESSAGE LIST</button> */}
            </div>
        </div>
    )
}

export default ChatBox
