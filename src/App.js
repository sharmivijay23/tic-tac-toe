
import './App.css';
import { useStore } from "./store"

function App() {

  const { data, turn, tie, winner, resetState } = useStore();

  return (
    <div className="App">
      <h1> Tic-Tac-Toe </h1>
      <div className='board-container'>
        <div className='row-container'>
          <div className='flexitem' onClick={() => !winner && turn(0, 0)}> {data[0][0]} </div>
          <div className='flexitem' onClick={() => !winner && turn(0, 1)}> {data[0][1]}  </div>
          <div className='flexitem' onClick={() => !winner && turn(0, 2)}> {data[0][2]}  </div>
        </div>
        <div className='row-container'>
          <div className='flexitem' onClick={() => !winner && turn(1, 0)}> {data[1][0]}  </div>
          <div className='flexitem' onClick={() => !winner && turn(1, 1)}> {data[1][1]}  </div>
          <div className='flexitem' onClick={() => !winner && turn(1, 2)}> {data[1][2]}  </div>
        </div>
        <div className='row-container'>
          <div className='flexitem' onClick={() => !winner && turn(2, 0)}> {data[2][0]}  </div>
          <div className='flexitem' onClick={() => !winner && turn(2, 1)}> {data[2][1]}  </div>
          <div className='flexitem' onClick={() => !winner && turn(2, 2)}> {data[2][2]}  </div>
        </div>
      </div>

      {winner && <div className='new-game'> <h2> {winner} won the game </h2>
        <button className='playbtn' onClick={() => resetState()}> Play Again </button> </div>}


      {tie === true && <div className='new-game'> <h2> It's a scratch </h2>
        <button className='playbtn' onClick={() => resetState()}> Play Again </button> </div>}

      {/* <div className='flex-container2'>
        <button class='playerButton'>
          <img src="./player_1.svg" alt="Player1" />
          <span className='Player1'> Player 1 </span>
        </button>
        <button class='playerButton'>
          <img src="./player_2.svg" alt="Player1" />
          <span className='Player2'> Player 2 </span>
        </button>
      </div> */}
    </div>
  );
}

export default App;
