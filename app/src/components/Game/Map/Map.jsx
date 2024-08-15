import { useEffect, useState } from 'react'
import './Map.css'
import Magnifier from "react-magnifier"

function Map( {imageJSON, goal, handleFound, hasWon, handleRefresh} ) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    // get correct x and y coordinates from imageJSON based on goal
    const [correctX, setCorrectX] = useState(0);
    const [correctY, setCorrectY] = useState(0);
  

    useEffect(() => {
        if (goal == "waldo") {
          setCorrectX(imageJSON.waldoX);
          setCorrectY(imageJSON.waldoY);
        } else if (goal == "odlaw") {
          setCorrectX(imageJSON.odlawX);
          setCorrectY(imageJSON.odlawY);
        } else {
          throw new Error("The goal is invalid. Please refresh the game.")
        }
    }, [goal, imageJSON]);

    // check if they found or not!
    const handleMouseClick = () => {
      if (
        Math.abs(mouseX - correctX) <= 15 &&
        Math.abs(mouseY - correctY) <= 15
      ) {
        handleFound();
      }
    };


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
      <div className="container" onMouseMove={handleMouseMove} onClick={handleMouseClick}>
        {hasWon ? (
          <div className="victoryScreen">
            <h1 className="victoryHeader">Found!</h1>
            <img className="waldoGif" src='/waldo-walk.gif' alt="Waldo Walking" />
            <button className="refreshButtonMap" onClick={handleRefresh}>Play Again</button>
          </div>
        ) : (
          <>
            <Magnifier
              src={`/waldo-images/${imageJSON.filename}`}
              zoomFactor={1.2}
              mgWidth={125}
              mgHeight={125}
              className='magnifier'
            />
            {/* <div>X: {mouseX}</div>
            <div>Y: {mouseY}</div> */}
          </>
        )}
      </div>
    );
}

export default Map;