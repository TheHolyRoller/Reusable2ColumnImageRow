import React from 'react'
// Import the stylesheet here 
import '../Styles/ImageRow.css'; 


function ImageRow() {
  return (
    <div className='positionalContainer'>
        <div className='mainContainer'>
      {/* Image Row  */}
        <div className='imageOne'></div>
        {/* Add in the First text section here  */}
        <div className='imageTwo'></div>
        {/* Add in the second text section here  */}
        </div>
        {/* Add in the container for these two text sections here  */}
        <div className="textContainer">
        
        {/* Put each of these sections into a container to center them  */}
        <div className="paragraphContainer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum?</p>
        </div>
        <div className='paragraphContainer'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, odio?</p>
        </div>
        </div>
    </div>
  );
}

export default ImageRow
