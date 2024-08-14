import { useState, useEffect } from 'react';
import './GameScreen.css';
import Map from './Map/Map';
import { getRandomImage } from '../../services/getMap';

const GameScreen = ({ changePage, difficulty, time, goal }) => {
  const [counter, setCounter] = useState(time);
  const [imageJSON, setImageJSON] = useState(getRandomImage(difficulty));

  // found?
  const [hasWon, setHasWon] = useState(false);

  const returnToHome = () => {
    changePage("home");
  };

  const handleFound = () => {
    setHasWon(true);
  }

  const handleRefresh = () => {
    setCounter(time);
    const newImage = getRandomImage(difficulty);
    setImageJSON(newImage);
    setHasWon(false);
  };

  const timeUp = counter <= 0;

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    const image = getRandomImage(difficulty);
    setImageJSON(image);
    // console.log(imageJSON);
  }, [difficulty]);

  return (
    <div className="game">
      <div className="counter-div">
        <p className="counter">{counter}</p>
        <a onClick={handleRefresh}><i className="fa fa-refresh refreshButton" aria-hidden="true"></i></a>
        <a onClick={returnToHome}><i className="fa fa-home homeButton" aria-hidden="true"></i></a>

      </div>
      <div className="map-container">
        <Map imageJSON={imageJSON} goal={goal} handleFound={handleFound} hasWon={hasWon}/>
      </div>
    </div>
  );
}

export default GameScreen;