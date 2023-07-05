import React , { startTransition, useState }  from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import { BrowserRouter,Routes , Route } from "react-router-dom" 

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =() =>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
  <div className="container">
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<TextForm  mode={mode}/>}/>
      <Route path="/about" element={<About/> } /> 

       </Routes> 
       </BrowserRouter>       
  </div>
 
    </>
  );
}

export default App;
