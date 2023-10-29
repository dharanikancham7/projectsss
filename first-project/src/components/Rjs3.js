import React, { Component } from 'react'

export class Rjs3 extends Component {
    state={
        btnn:0,
    }
    onSubmit=()=>{
      const randomnum=Math.ceil(Math.random()*100)
      this.setState({btnn:this.state.btnn+randomnum})
    }
  render() {
    return (
      <div style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
        <h1>Count {this.state.btnn} </h1>
        {this.state.btnn%2===0 ? <p>Count is Even </p>:<p>Count is Odd</p>}
        <button onClick={this.onSubmit}>Increment</button>
      </div>
  )
  }
}


export default Rjs3