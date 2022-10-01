import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode,setMode] = useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode  ('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="ENTER THE TEXT TO ANALYZE BELOW" mode={mode}/>
       {/* <About/> */}
      </div>
    </>

  );
}

export default App;
