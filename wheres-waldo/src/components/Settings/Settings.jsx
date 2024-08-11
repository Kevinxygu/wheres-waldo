import { useState } from 'react'
import './Settings.css'
import waldoSelector from "../../assets/images/WALDO-SELECTOR-0.png";
import WaldoGif from "../../assets/gifs/WALDO-GIF.gif"
import OdlawGif from "../../assets/gifs/ODLAW-GIF.gif"

function Settings({changePage, difficulty, changeDifficulty, time, changeTime, goal, changeGoal}) {
  const returnToHome = () => {
    changePage("home");
  };

  const handleChooseEasy = () => {
    changeDifficulty("easy");
  };

  const handleChooseMedium = () => {
    changeDifficulty("medium");
  };

  const handleChooseHard = () => {
    changeDifficulty("hard");
  };

  const handleNewTime = (event) => {
    const inputValue = event.target.value;

    if (Number(inputValue) <= 0) {
      handleChooseTime(0);
    } else {
      handleChooseTime(inputValue);
    }
  };

  const handleChooseTime = (time) => {
    changeTime(time);
    console.log(time)
    console.log(typeof time)
  };

  const waldo = () => {
    changeGoal("waldo");
  };

  const odlaw = () => {
    changeGoal("odlaw");
  };

  return (
    <div className="settingsScreen">
        <a onClick={returnToHome}><p className="back">Back</p></a>

        <div className="difficulty">
            <h1 className="header">Difficulty:</h1>
            <button onClick={handleChooseEasy} className={`option ${difficulty === "easy" ? "special-style" : ""}`}>
            EASY
            {difficulty === "easy" && (
                <img src={waldoSelector} alt="Special Image" className="special-image" />
            )}
            </button>
            <button onClick={handleChooseMedium} className={`option ${difficulty === "medium" ? "special-style" : ""}`}>
            MEDIUM
            {difficulty === "medium" && (
                <img src={waldoSelector} alt="Special Image" className="special-image" />
            )}
            </button>
            <button onClick={handleChooseHard} className={`option ${difficulty === "hard" ? "special-style" : ""}`}>
            HARD
            {difficulty === "hard" && (
                <img src={waldoSelector} alt="Special Image" className="special-image" />
            )}
            </button>
        </div>
        <div className="time">
          <h1 className="header">Time in seconds (Just for fun!):</h1>
          {/* <input type="number" className="timeInput" value={time} onChange={handleNewTime} /> */}
          <input type="number" className="timeInput" min={0} max={999}value={time == "0" ? NaN : (time)} onChange={handleNewTime} />
        </div>

        <div className="goal">
          <h1 className="header">Find:</h1>
          <button onClick={waldo} className={`goal-button ${goal === "waldo" ? "waldo" : ""}`}>
            <div className="button-content">
              <p className="button-heading">WALDO</p>
              <img src={WaldoGif} className="gif"/>
            </div>
          </button>

          <button onClick={odlaw} className={`goal-button ${goal === "odlaw" ? "odlaw" : ""}`}>
            <div className="button-content">
              <p className="button-heading">ODLAW</p>
              <img src={OdlawGif} className="gif"/>
            </div>
          </button>

        </div>
    </div>
  )
}

export default Settings