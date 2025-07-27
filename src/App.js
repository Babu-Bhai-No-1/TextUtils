import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = () => {               //insert cls as prop
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark-Mode has been enabled", "success");
      // document.title = "TextUtils Dark-Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light-Mode has been enabled", "success");
      // document.title = "TextUtils Light-Mode";

    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> 
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word and Character counter,Remove extra spaces" mode={mode}/>}/>
          </Routes> 
        </div>
      </Router>

    </>
  );
}

export default App;
