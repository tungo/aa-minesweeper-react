import React from 'react';


class Tile extends React.Component{
  constructor(props){
    super(props);

    let display = ' ';
    if (this.props.tile.revealed){
      if (this.props.tile.bombed){
        display = 'R';
      } else if (this.props.tile.flagged){
        display = 'F';
      }
      display = 'T';
    }
    
    this.state = {display};
  }

  handleClick(e){
     const flagged = e.altKey;
     this.props.updateGame(this.props.tile, flagged);
  }

  render(){
    return (
      <div onClick={this.handleClick.bind(this)} className='tile'>{this.state.display}</div>
    );
  }
}

export default Tile;
