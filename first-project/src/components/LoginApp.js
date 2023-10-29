// import React,{Component} from "react";

// class LoginApp extends Component{

//     state = {isLoggedIn: false}

//   onClickButton = () => {
//     this.setState({isLoggedIn:!this.state.isLoggedIn})
//   }

 
//   render() {
//     return (
//       <div className="app-container">
//         <div className="home-container">
//         <p>{this.state.isLoggedIn? "Welcome User" : "Please Login"}</p> 
//         <button onClick={this.onClickButton}> {this.state.isLoggedIn? "logout":"login"} </button>
//         </div>
//       </div>
//     )
//   }
// }
//   export default LoginApp


import React,{Component} from "react";

class LoginApp extends Component{

    state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState({isLoggedIn:!this.state.isLoggedIn})
  }

 
  render() {
    const{isLoggedIn}=this.state
    return (
      <div className="app-container">
        <div className="home-container">
        <p>{isLoggedIn? "Welcome User" : "Please Login"}</p> 
        <button onClick={this.onClickButton}> {isLoggedIn? "logout":"login"} </button>
        </div>
      </div>
    )
  }
}
  export default LoginApp

