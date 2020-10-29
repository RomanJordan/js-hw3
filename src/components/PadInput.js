  
import React, { Component } from 'react';




class PadInput extends Component {
    state = {
        colors: [
            {id:"blue",name:"blue"},
            {id:"red",name:"red"},
            {id:"blue",name:"lightgreen"},
            {id:"red",name:"orange"},
        ]
    }
    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    

    render() {
        var btns = []
        this.state.colors.forEach ((t) => {
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
            <div >
            {btns}
            
            </div>
            
        )
    }
}

export default PadInput