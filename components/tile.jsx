import React from 'react';


class Tile extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(e){
     const flagged = e.altKey ? true : false;
     this.props.updateGame(this.props.tile, flagged);
  }

  updateDisplay() {
    let display = ' ';

    if (this.props.tile.flagged){
       display = '☕';
    }

    if (this.props.tile.explored){
      if (this.props.tile.bombed){
        display = '☠';
      } else {
        let num = this.props.tile.adjacentBombCount();
        display = num === 0 ? ' ' : num;
      }
    }
    return display;
  }

  render(){
    let display = this.updateDisplay();
    return (
      <div onClick={this.handleClick.bind(this)} className='tile'>{display}</div>
    );
  }
}

export default Tile;
