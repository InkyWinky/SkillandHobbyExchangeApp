import React from 'react'
import "./styles/HobbyHashtag.css"

const HobbyHashtag = (props) => {
    return (
        <div id="hashtag" value={props.text.substring(1)} onClick = {props.onClick}>
            {props.text}   X
        </div>
    )
}

export default HobbyHashtag
