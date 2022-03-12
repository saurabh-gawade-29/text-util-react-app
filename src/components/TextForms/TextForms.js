import React, { useState } from 'react'
import './TextForms.css'
import PropTypes from 'prop-types'


export default function TextForms(props) {
    // text is a varibale and settext is function
    const [text, setText] = useState('');


    const handleUpClick = () => {
        // console.log("we click the button usign handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("we fire handle on change in textArea");
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <form>
                    <div className="form-group">
                        <h2>{props.TextForm_Title}</h2>
                        <textarea className="form-control mb-2" rows="6" value={text} onChange={handleOnChange} id="myBox" placeholder="Write here....."></textarea>
                        <div className="allBTN ">
                            <button type="button" className="btn btn-danger m-2" onClick={handleUpClick}>Convert to UpperCase</button>
                            <button type="button" className="btn btn-danger m-2" onClick={handleLoClick}>Convert to LowerCase</button>
                            <button type="button" className="btn btn-danger m-2" onClick={handleClearClick}>Clear Text</button>
                            <button type="button" className="btn btn-danger m-2" onClick={handleCopyClick}>Copy Text</button>
                            <button type="button" className="btn btn-danger m-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container">
                <h2>Your text Summary</h2>
                <p>Total Words: {text.split(" ").length}</p>
                <p>Total charchter: {text.length}</p>
                <p>Required time to read this doc: {0.008 * text.split(" ").length} min</p>
            </div>
            <div className="container">
                <h2>Preview Text</h2>
                <p>
                    {text}
                </p>
            </div>
        </>

    )
}

// Typechecking with PropTypes

TextForms.protoTypes = {
    TextForm_Title: PropTypes.string,
}