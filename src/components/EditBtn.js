import React, { Component } from 'react';

class EditBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        let elements = document.getElementsByClassName("draggable")
        if (!this.state.isToggleOn) {
            console.log(this.state.isToggleOn+ "false")
            // let element = document.getElementById("inputs")
            // element.draggable = false;

            
            for (var i = 0; i < elements.length; i++) {
                elements[i].draggable = false;
                elements[i].style.opacity = 0.5;
            }
        }
        else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].draggable = true;
                elements[i].style.opacity = 1;
            }
        }
    }


   render() {
       return(
           <div>
               <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'EDIT OFF' : 'EDIT ON'}
                </button>
           </div>
       )
   }
}

export default EditBtn