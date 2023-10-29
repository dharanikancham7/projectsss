// // Write your code here.
// import {Component} from 'react'

// import './index.css'

// class LettersCalculator extends Component {
//   state = {
//     inputPhrase: '',
//   }

//   onChangeInputPhrase = event => {
//     const {value} = event.target

//     this.setState({inputPhrase: value})
//   }

//   render() {
//     const {inputPhrase} = this.state

//     return (
//       <div className="app-container">
//         <div className="letters-calculator-container">
//           <div className="calculator-container">
//             <h1 className="heading">Calculate the Letters you enter</h1>
//             <div className="input-phrase-container">
//               <label className="label" htmlFor="phraseText">
//                 Enter the phrase
//               </label>
//               <input
//                 className="letters-input"
//                 id="phraseText"
//                 onChange={this.onChangeInputPhrase}
//                 placeholder="Enter the phrase"
//                 type="text"
//                 value={inputPhrase}
//               />
//             </div>
//             <p className="letters-count">No.of letters: {inputPhrase.length}</p>
//           </div>
//           <img
//             alt="letters calculator"
//             className="letters-calculator-image"
//             src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default LettersCalculator

import React, { Component } from 'react'

export class LettersCalculatorApp extends Component {
  state = {
    key:0
  }
  render() {
    return (
      <div>
        <h1>Calculate the Letters you Enter</h1>
        <input type="text" onChange={(e)=>this.setState({key:e.target.value.length})}/>
        <h1>No.of letters {this.state.key}</h1>
      </div>
    )
  }
}

export default LettersCalculatorApp