import React, { Component } from 'react';

export class CoinTossGame extends Component {
  state={
    bool:false,
    heads:0,
    tails:0,
    total:0
  }
  onHeads=()=>{
    this.setState({bool:!this.state.bool})
    if(this.state.bool){
      this.setState({heads:this.state.heads+1})
    }
    this.setState({tails:this.state.tails+1})
  }
  render() {
    return (
      <div>
        <h1>CoinTossGame</h1>
        {this.state.bool ? <img style={{height:40,width:40}} src="https://assets.ccbp.in/frontend/react-js/heads-img.png"/> : <img style={{height:40,width:40}}  src="https://assets.ccbp.in/frontend/react-js/tails-img.png"/>}
      <p>heads:{this.state.heads}</p>
      <p>tals:{this.state.tails}</p>
      <p>total:{this.state.heads+this.state.tails}</p>
      <button onClick={this.onHeads}>but</button>
      </div>
    )
  }
}

export default CoinTossGame