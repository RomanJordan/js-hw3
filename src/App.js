import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PadInput from './components/PadInput';
import DesignPad from './components/DesignPad'
import EditBtn from './components/EditBtn'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="container">  
          <PadInput />
          <DesignPad />
          <EditBtn/>
    </div>
  );
}

export default (App);
