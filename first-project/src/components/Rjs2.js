import React, { Component } from 'react'

export class Rjs2 extends Component {
    state={
        btnn:false,
    }
    onSubmit=()=>{
        this.setState({btnn:!this.state.btnn})
    }
  render() {
    return (
      <div style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
        <h1>LOGN PAGE </h1>
        {this.state.btnn? <p>Hello user</p>:<p>WELCOME</p>}
        <button onClick={this.onSubmit}>{this.state.btnn? 'logout':'login'}</button>
        
      </div>
  )
  }
}


export default Rjs2