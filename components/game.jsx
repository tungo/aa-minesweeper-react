import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(){
    super();

    let board = new Minesweeper.Board(9, 10);
    this.state = {board};

  }

  updateGame() {

  }

  render(){
    return(
      <div className="game">
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}

export default Game;
