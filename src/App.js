import React , { startTransition, useState }  from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


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
      <Router>
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
  <div className="container">

  <Routes>
  <Route path='/' element={<TextForm  mode={mode}/>} />
    <Route path="/about" element ={  <About />}/>   
    </Routes>
  </div>
  </Router>
    </>
  );
}

export default App;
