import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PadInput from './components/PadInput';
import DesignPad from './components/DesignPad'


function App() {
  return (
    <div className="App">
        <div className="pad-input-container">
          <PadInput />
        </div>
        
          <DesignPad />
        
    </div>
  );
}

export default (App);
