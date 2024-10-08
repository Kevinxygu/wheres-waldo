import { useState } from 'react'
import './Home.css'
import Banner from "../../assets/images/WALDO-BANNER-THIN.png"

function Home( {changePage}) {
  const [count, setCount] = useState(0)

  const handleChooseSettings = () => {
    changePage('settings');
  };
  
  const handleChooseGame = () => {
    changePage('game');
  };

  const handleChooseTerms = () => {
    changePage('terms');
  };

  return (
    <>
      <div className="image-container">
        <img src={Banner} className="banner" alt="Where's Waldo?" />
        <div className="overlay">
            <button onClick={handleChooseGame} className="action-button">PLAY</button>
            <a onClick={handleChooseSettings}><p className="settings">Settings</p></a>
            <a onClick={handleChooseTerms}><p className="terms">Terms</p></a>
        </div>
      </div>
    </>
  )
}

export default Home