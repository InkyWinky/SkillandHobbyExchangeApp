import React from 'react'
import "./styles/Title.css"

const Title = (props) => {
    return (
        <h2 id="title">{props.text}<sup>{props.sup}</sup></h2>
    )
}

export default Title
