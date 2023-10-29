import React,{Component} from "react";
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'rani' : 'dha'
    

    return (
      <div style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
        <div className={`${modeClassName}`}>
          <h1 style={{color:"white"}}>Click To Change Mode</h1>
          <button onClick={this.onClickButton}>
            {isDarkMode? "Light Mode":'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

// state={
//   button:false
// }
// onsubmit=()=>{
//   this.setState({button:!this.state.button})
// }

// render() {
// return (
// <div>
//   <h1 className="heading">Click to change the mode</h1>
//   <div className={`container ${this.state.button ? 'dark-mode' : 'light-mode'}`}>
//   <button onClick={this.onsubmit}>{ this.state.button ? "Dark Mode": "Light Mode" }</button>

// </div>
// )
// }
// }