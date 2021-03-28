import { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Start from './game/pages/Start';
import Spinner from './shared/UIElements/Spinner';
import { PlayerContext } from './shared/context/player-context';
import GamePage from './game/pages/GamePage';
import { usePlayer } from './shared/hooks/player-hook';
import Rankings from './game/pages/Rankings';

import './App.scss';


function App() {

  const {
    isDraw,
    seqNeeded,
    player,
    round,
    gameSize,
    playerNames,
    gameWon,
    getSeqNeededToWin,
    reloadGame,
    getGameSize,
    nextPlayer,
    getCell,
    isGameWon,
    getPlayerNames,
    resetGame,
    drawFirstPlayer,
    isItADraw
  } = usePlayer();

  const routes = (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Start />
        </Route>
        <Route path='/game' exact>
          <GamePage />
        </Route>
        <Route path='/scoreboards' exact>
          <Rankings />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
  return (
    <PlayerContext.Provider
      value={{
        isDraw: isDraw,
        seqNeeded: seqNeeded,
        player: player,
        round: round,
        gameSize: gameSize,
        playerNames: playerNames,
        gameWon: gameWon,
        getSeqNeededToWin: getSeqNeededToWin,
        reloadGame: reloadGame,
        getPlayerNames: getPlayerNames,
        getGameSize: getGameSize,
        nextPlayer: nextPlayer,
        getCell: getCell,
        isGameWon: isGameWon,
        resetGame: resetGame,
        drawFirstPlayer: drawFirstPlayer,
        isItADraw: isItADraw
      }}
    >
      <main className='center'>
        <Suspense
          fallback={<div><Spinner overlay /></div>}
        >
          {routes}
        </Suspense>
      </main>
    </PlayerContext.Provider>
  );
}

export default App;
