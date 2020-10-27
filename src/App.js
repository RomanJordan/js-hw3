import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Controls from './components/controls'
import Item from './components/Item'
import DesignPad from './components/designpad'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { DragDropContext } from 'react-dnd'


class App extends Component {
  state = {
    items: [
      {id: 1, name: 'blue'},
      {id: 2, name: 'red'},
      {id: 3, name: 'green'},
      {id: 4, name: 'orange'}
    ],

    design_item: [
      {id: 1, name: '1'},
      {id: 2, name: '2'},
      {id: 3, name: '3'},
      {id: 4, name: '4'}
    ],
  }
  render(){
    return(
      <DndProvider backend={HTML5Backend}>
        <h1>entry</h1>
        <div className="item-container">
          {this.state.items.map((item, index) => (
                  <Item key={item.id} item={item} />
          ))}  
        </div>
        <div className="design-container">
          {this.state.design_item.map((design_item, index) => (
                  <DesignPad key={design_item.id} item={design_item} />
          ))}  
        </div>
      </DndProvider>
    )
  }
}

export default (App);
