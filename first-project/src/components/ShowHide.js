import React, { Component } from 'react'

export class ShowHide extends Component {
  state = {
    ShowFirstName:false,
    ShowLastName:false

  }
  onShowFirstName =()=>{
    this.setState({ShowFirstName:!this.state.ShowFirstName})
  }
  onShowLastName =()=>{
    this.setState({ShowLastName:!this.state.ShowLastName})
  }

  render() {
    return (
      <div>
        <h1>ShowHide</h1>
        <button onClick={this.onShowFirstName}>Show/Hide Firstname</button>
        {this.state.ShowFirstName && <h1>joe</h1>}
        <button onClick={this.onShowLastName}>Show/Hide Lastname</button>
        {this.state.ShowLastName  && <h1>jonas</h1>}
      </div>
    )
  }
}

export default ShowHide