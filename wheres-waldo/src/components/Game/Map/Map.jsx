import { useState } from 'react'
import './Map.css'
import Image from "../../../assets/waldo-images/airport.jpg"
import Magnifier from "react-magnifier"

function Map() {
    // const handleMouseMove = (e) => {
    //   const magnifyContainer = e.currentTarget;
    //   const image = magnifyContainer.querySelector("img");
    //   const magnifyGlass = magnifyContainer.querySelector(".magnify-glass");
    //   const zoomLevel = 2; // Set the desired zoom level
  
    //   const posX = e.pageX - magnifyContainer.offsetLeft;
    //   const posY = e.pageY - magnifyContainer.offsetTop;
    //   const imageX = posX / image.clientWidth;
    //   const imageY = posY / image.clientHeight;
  
    //   magnifyGlass.style.backgroundPosition = `${imageX * 100}% ${imageY * 100}%`;
    //   magnifyGlass.style.transform = `scale(${zoomLevel})`;
    //   magnifyGlass.style.left = `${posX - magnifyGlass.offsetWidth / 2}px`;
    //   magnifyGlass.style.top = `${posY - magnifyGlass.offsetHeight / 2}px`;
    // };
  
    // return (
    //   <div className="container" onMouseMove={handleMouseMove}>
    //     <img src={Image} alt="Image" className="image" />
    //     <div className="magnify-glass"></div>
    //   </div>
    // );

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
        <Magnifier src={Image} zoomFactor={1.2} mgWidth={125} mgHeight={125}/>
        <div>Mouse X: {mouseX}</div>
        <div>Mouse Y: {mouseY}</div>
      </div>
    )
}

export default Map;