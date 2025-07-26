import React from 'react'
// import { useState } from 'react'

export default function About(props) {
   

// const [myStyle,setMyStyle] =useState({
//         color: 'black',
//         backgroundColor:'white'

//     })
const myStyle={
    color:props.mode ==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white'
}
    

    return (
        <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils helps you analyze your text instantly — from counting words and characters to removing extra spaces. Perfect for editing, proofreading, and content optimization.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is completely free to use — no sign-up required, no hidden costs. Built for students, writers, and developers who need quick and reliable text utilities.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils runs smoothly on all major web browsers like Chrome, Firefox, Edge, and Safari. Whether you're on desktop or mobile, your tools are always accessible.
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

