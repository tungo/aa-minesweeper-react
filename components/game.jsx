import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(){
    super();

    let board = new Minesweeper.Board(9, 10);
    this.state = {board};

  }

  updateGame(tile, flagging) {
    if(flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  render(){
    return(
      <div className="game">
        <Board board={this.state.board} updateGame={this.updateGame.bind(this)}/>
      </div>
    );
  }
}

export default Game;
