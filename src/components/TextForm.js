import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");


    const handleOnChange=(event)=>{
         
         setText(event.target.value);
    }

    const handleUpClick=()=>{
         let newText=text.toUpperCase();
         setText(newText);
         props.showAlert("Text has been converted to uppercase","success");
    }
    const handleLowClick=()=>{
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Text has been converted to lowercase","success");
    }
    const handleClearClick=()=>{
         let newText="";
         setText(newText);
         props.showAlert("Text has been cleared","success");
    }
    const handleReverseClick=()=>{
         let newText=text.split("").reverse().join("");
         setText(newText);
         props.showAlert("Text has been reversed","success");
    }
    const handleCopy=()=>{
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     document.getSelection().removeAllRanges();
     props.showAlert("Text has been copied","success");
    }
    const handleExtraSpaces=()=>{
     let newText=text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert("Extra spaces were removed","success");
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>It takes {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this text.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
