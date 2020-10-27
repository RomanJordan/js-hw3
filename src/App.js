import logo from './logo.svg';
import Controls from './components/controls'
import DesignPad from './components/designpad'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Design pad</h1>
      <DesignPad />
      <Controls/>
    </div>
  );
}

export default App;
