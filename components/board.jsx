import React from 'react';

import {Tile} from './tile.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.board.grid);
  }

  render() {
    return (
      <div>
        {
          this.props.board.grid.map((row, idx) => <div key={idx}>{row.map((cell, cIdx) => <div key={cIdx}></div>)}</div>)
        }
      </div>
    );
  }
}

export default Board;
