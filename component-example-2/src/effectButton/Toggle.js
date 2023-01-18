import { useState, useEffect } from "react";

function Toggle() {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const resize = () => {
        console.log('resizing happened');
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
    
      useEffect(
        () => {
          window.addEventListener('resize', resize);

          return () => {window.removeEventListener('resize', resize)};
        }, []
      );

    return (
        <div>
            <h2> 01/17: useEffect (conti.)  Mount & unmonted</h2>
            <h3> width: {width} height: {height} </h3>
         </div>

    );
}

export default Toggle;