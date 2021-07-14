import React, {useState, useEffect} from 'react'
import "./styles/ChatBox.css"
import io from 'socket.io-client'

const ChatBox = (props) => {

    const [socket, setSocket] = useState(io('http://localhost:5000', { transports : ['websocket'] }))
    const [message, setMessage] = useState("")
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        socket.on('chat-message', data => {
            const tempMsgList = Array.from(messageList);
            tempMsgList.push(data)
            setMessageList(tempMsgList);
    })}, [])



    const handleMessageSubmit = (e) =>{
        e.preventDefault()
        socket.emit('send-chat-message', message)
        setMessage("")
    }



    return (
        <div id="chatBox">
            {messageList.map((item, index) => {return(<h6 key={item}>{item}</h6>)})}
        <form id="send-container" onSubmit={handleMessageSubmit}>
            <input type="text" id="message-input" value={message} onChange={(e) => setMessage(e.target.value)}></input>
                <button type="submit" id="send-button">
                    Send
                </button>
        </form>
        <button onClick={() => {console.log(messageList)}}>Click Me!</button>

    </div>
    )
}

export default ChatBox
