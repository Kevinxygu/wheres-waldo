import { useState } from 'react'
import './Map.css'
import Magnifier from "react-magnifier"

function Map( {imageName} ) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);


    const handleMouseMove = (e) => {
        const magnifyContainer = e.currentTarget;
        const image = magnifyContainer.querySelector("img");

        const posX = e.pageX - magnifyContainer.offsetLeft;
        const posY = e.pageY - magnifyContainer.offsetTop;

        const imageX = Math.max(0, Math.min(posX, image.clientWidth));
        const imageY = Math.max(0, Math.min(posY, image.clientHeight));

        setMouseX(imageX);
        setMouseY(imageY);
    };

    return (
      <div className="container" onMouseMove={handleMouseMove}>
        <Magnifier src={`/waldo-images/${imageName}`} zoomFactor={1.2} mgWidth={125} mgHeight={125}/>
        <div>Mouse X: {mouseX}</div>
        <div>Mouse Y: {mouseY}</div>
      </div>
    )
}

export default Map;