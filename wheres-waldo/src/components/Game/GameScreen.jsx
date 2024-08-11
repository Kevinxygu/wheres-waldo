import { useState } from 'react'
import './GameScreen.css'
import Map from './Map/Map'
import { useEffect } from 'react'

function GameScreen({changePage, difficulty, time, goal}) {
  const [counter, setCounter] = useState(time);
  
  const returnToHome = () => {
    changePage("home");
  };

  const timeUp = counter <= 0

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="game">
      <div className="counter-div">
        <p className="counter">{counter}</p>
      </div>
        <a onClick={returnToHome}><p className="back">Back</p></a>
      <div class="map-container">
        <Map />
      </div>
    </div>
  )
}

export default GameScreen