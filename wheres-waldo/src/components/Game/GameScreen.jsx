import { useState } from 'react'
import './GameScreen.css'
import Map from './Map/Map'
import { useEffect } from 'react'
import { getRandomImage } from '../../services/getMap'

function GameScreen({changePage, difficulty, time, goal}) {
  const [counter, setCounter] = useState(time);
  const [imageJSON, setImageJSON] = useState(getRandomImage(difficulty));
  
  const returnToHome = () => {
    changePage("home");
  };

  const timeUp = counter <= 0

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    const image = getRandomImage(difficulty);
    setImageJSON(image);
    console.log(imageJSON);
  }, [difficulty]);

  return (
    <div className="game">
      <div className="counter-div">
        <p className="counter">{counter}</p>
        <p className="goal">Goal: {goal}</p>
        <p className="difficulty">Difficulty: {difficulty}</p>
      </div>
        <a onClick={returnToHome}><p className="back">Back</p></a>
      <div class="map-container">
        <Map imageJSON={imageJSON} goal={goal} />
      </div>
    </div>
  )
}

export default GameScreen