import React from 'react';

import Tile from './tile.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.board.grid);
  }

  render() {
    return (
      <div className='board'>
        {
          this.props.board.grid.map((row, idx) => <div key={idx}>{row.map((cell, cIdx) => <div key={cIdx}><Tile tile={cell} updateGame={this.props.updateGame}/></div>)}</div>)
        }
      </div>
    );
  }
}

export default Board;
