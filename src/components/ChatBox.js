import React from 'react'
import "./styles/ChatBox.css"
import io from 'socket.io'

const ChatBox = () => {
    const socket = io('http://localhost:5000')

    socket.on('chat-message', data => {
        console.log(data)
    })


    return (
        <div id="chatBox">
        <form id="send-container">
            <input type="text" id="message-input"></input>
                <button type="submit" id="send-button">
                    Send
                </button>
        </form>

    </div>
    )
}

export default ChatBox
