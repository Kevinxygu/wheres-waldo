import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Settings from './components/Settings/Settings'
import GameScreen from './components/Game/GameScreen'

function App() {
  // Initial state
  const [currentPage, setCurrentPage] = useState('home');
  const [difficulty, setDifficulty] = useState('easy');
  const [time, setTime] = useState(60);
  const [goal, setGoal] = useState("waldo");

  const changeDifficulty = (diff) => {
    setDifficulty(diff);
  };

  const changeTime = (time) => {
    setTime(time);
  };

  const changeGoal = (goal) => {
    setGoal(goal);
  };

  // Function to handle changing the current page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  let pageComponent;
  if (currentPage === 'home') {
    pageComponent = <Home changePage={changePage}/>;
  } else if (currentPage === 'settings') {
    pageComponent = (
      <Settings
        changePage={changePage}
        difficulty={difficulty}
        changeDifficulty={changeDifficulty}
        time={time}
        changeTime={changeTime}
        goal={goal}
        changeGoal={changeGoal}
      />
    );
  } else if (currentPage === 'game') {
    pageComponent = <GameScreen changePage={changePage}
     difficulty={difficulty}
      time={time}
      goal={goal} />
  }

  return (
    <div>
      {pageComponent}
    </div>
  );
}

export default App
