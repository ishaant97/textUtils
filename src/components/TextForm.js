import React, { useState } from 'react'

export default function TextForm(props) {
    const handelUpClicked = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case!!!", "success");
    }

    const handelLowClicked = () => {
        console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case!!!", "success");
    }

    const handelClearText = () => {
        setText("");
        props.showAlert("Cleared Text!!!", "success");
    }
    const handelCopyText = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!!!", "success");
    }
    const handelRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!!!", "success");
    }

    const handelOnChange = (event) => {
        console.log("On change was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "new text" //Wrong way to change the state
    // setText("new text") //Correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-1' onClick={handelUpClicked}>Convert To UpperCase</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handelLowClicked}>Convert To LowerCase</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handelClearText}>Click to clear the text</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handelCopyText}>Click to Copy Text</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handelRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something In The Text Box Above To Preview It"}</p>
            </div>
        </>
    )
}
