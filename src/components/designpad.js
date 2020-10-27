import React from 'react';


const DragAndDrop = props => {
    const handleDragEnter = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragLeave = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragOver = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDrop = e => {
      e.preventDefault();
      e.stopPropagation();
    };

const DesignHeader = () => {
    return (
        <div class="container">
            <div class="box" onDrop={e => handleDrop(e)}>A</div>
            <div class="box" onDrop={e => handleDrop(e)}>B</div>
            <div class="box" onDrop={e => handleDrop(e)}>C</div>
            <div class="box" onDrop={e => handleDrop(e)}>D</div>
        </div> 
    )
}



  return (
    // <div className={'drag-drop-zone'}
    //   onDrop={e => handleDrop(e)}
    //   onDragOver={e => handleDragOver(e)}
    //   onDragEnter={e => handleDragEnter(e)}
    //   onDragLeave={e => handleDragLeave(e)}
    // >
      
    // </div>
    <DesignHeader/>
    
  );
};
export default DragAndDrop;
