
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () => {
        // console.log("lowercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () => {
        // console.log("lowercase is clicked" + text);
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const [text, setText] = useState('enter text here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? ' grey' : 'white' }} >
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn danger mx-2" style = {{background: '#edb4bd'}} onClick={handleUpClick} >Convert to upper case</button>
                <button className="btn btn primary mx-2" style = {{background: '#edb4bd'}} onClick={handleloClick}>Convert to lower case</button>
                <button className="btn btn primary mx-2" style = {{background: '#edb4bd'}}onClick={handleclearClick}>Clear</button>
                <button className="btn btn primary mx-2" style = {{background: '#edb4bd'}}onClick={handleCopy}>copy text</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? '#9068be ' : '#e1e8f0' }} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>

            </div>
        </>
    )

}
