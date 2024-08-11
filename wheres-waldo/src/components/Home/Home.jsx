import { useState } from 'react'
import './Home.css'
import Banner from "../../assets/images/WALDO-BANNER-6.jpg"

function Home( {changePage}) {
  const [count, setCount] = useState(0)

  const handleChooseSettings = () => {
    changePage('settings');
  };
  
  const handleChooseGame = () => {
    changePage('game');
  };

  return (
    <>
      <div className="image-container">
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

        <img src={Banner} className="banner" alt="Where's Waldo?" />
        <div class="overlay">
            <button onClick={handleChooseGame} class="action-button">PLAY</button>
            <a onClick={handleChooseSettings}><p class="settings">Settings</p></a>
        </div>
      </div>
    </>
  )
}

export default Home