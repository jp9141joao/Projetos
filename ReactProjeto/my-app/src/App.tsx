import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Button from './components/Buttton/Button';

function App() {

  function handleClick(){
    alert("Button clicked")
  }

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button label="Click Me" onClick={handleClick} />
      </div>
    </div>
  );

}

export default App