import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);

  }

  const toggleMode = ()=>{
   if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor="#027478";
     showAlert("Dark mode has been enabled", "success");
  
   } else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled", "success");

   }

  }
  
  // const slideMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('new');
  //     document.body.style.backgroundColor="#d10d58";
  //     showAlert("New mode has been enabled", "success");
   
  //   } else if(mode==='dark') {
  //     setMode('new');
  //     document.body.style.backgroundColor="#d10d58";
  //     showAlert("New mode has been enabled", "success");
   
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor="white";
  //     showAlert("Light mode has been enabled", "success");

  //   }
 
  //  }

  return (
    <>  
    {/* <Router>  */}
  <Navbar title="Textutils" mode={mode} onToggle={toggleMode} />
  <Alert alert={alert} /> 
  <div className='container my-3'>
      {/*  <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
  {/* <Routes> */}
  {/* <Route exact path="/about" element={ <About/> } /> */}
  {/* <Route exact path="/" element={ */}
  <TextForm heading="Enter the text to analyze" mode={mode}  showAlert={showAlert}/>

  {/* } />   */}
 {/* </Routes> */}
  </div>  
  {/* </Router> */}
  </>
  );

  }
export default App;
