import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import GameScreen from './components/Game/GameScreen';
import Terms from './components/Terms/Terms';

// main app screen (conditionally renders home, settings, game, or terms)
const App = () => {
  // Initial state
  const [currentPage, setCurrentPage] = useState('home');
  const [difficulty, setDifficulty] = useState('easy');
  const [time, setTime] = useState(60);
  const [goal, setGoal] = useState('waldo');
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 900);

  useEffect(() => {
    // Function to handle resizing the screen if it's too small (900 px, for the width of the game)
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    pageComponent = <Home changePage={changePage} />;
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
    pageComponent = (
      <GameScreen
        changePage={changePage}
        difficulty={difficulty}
        time={time}
        goal={goal}
      />
    );
  } else if (currentPage === 'terms') {
    pageComponent = <Terms changePage={changePage} />;
  }

  return (
    <div>
      {isScreenSmall ? (
        <div className="smallScreenMessage">
          <img src="/woof.png" alt="Waldo's dog on the page where screen is a bit too small" className="tooSmallImage"/>
          <p className="smallScreenText">Your screen is too small! I'm currenty working on bringing Where's Waldo to this screen size :)</p>
        </div>
      ) : (
        pageComponent
      )}
    </div>
  );
};

export default App;