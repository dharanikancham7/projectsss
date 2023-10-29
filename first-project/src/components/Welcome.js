import React,{ Component } from "react"
//import './App.css'

class Welcome extends Component {
  state = { isSubscribed: false }

  onSubscribe=()=>{
    this.setState(prevState=>({isSubscribed:!prevState.isSubscribed}))
  }
  render() {
    const {isSubscribed} =this.state
   
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Ending</p>
        <button onClick={this.onSubscribe}> {isSubscribed?'Subscribed':'Subscribe'} </button>
      </div>
    )
 }
}
// state={
//   button:false
// }
// onsubmit=()=>{
//   this.setState({button:!this.state.button})
// }

// render() {
// return (
// <div>
//   <h1 className="heading">Welcome</h1>
//   <p className="description">Thank you! Happy Ending</p>
//   <button onClick={this.onsubmit}>{ this.state.button ? "Subscribed": "Subscribe" }</button>
// </div>
// )
// }

export default Welcome