  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';



class DesignPad extends Component {
    state = {
        buttons: [
            {id:"1",name:"1"},
            {id:"2",name:"2"},
            {id:"3",name:"3"},
            {id:"4",name:"4"},
        ]
    }


    onDragOver = (ev) => {
        // console.log("on drag over")
        ev.preventDefault();
    }

    onDrop = (ev) => {
        var id = ev.dataTransfer.getData("id");
        console.log("on drop, id: "+id)
        let element = document.getElementById('button')
        ReactDOM.findDOMNode(element).style.backgroundColor = id
        ev.preventDefault();
    }

    render() {
        var btns = []
        this.state.buttons.forEach ((t) => {
            btns.push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: ''}}
                    >
                    {t.name}
                </div>
            );
        });

        return(
            <div className="designpad"  id="button"
            style={{backgroundColor: 'white'}} 
            onDragOver={(ev)=>this.onDragOver(ev)} 
            onDrop={(e)=>this.onDrop(e, "complete")}>
                
            </div>
            
        )
    }
}

export default DesignPad