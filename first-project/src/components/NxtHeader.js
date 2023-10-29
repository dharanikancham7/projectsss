import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NxtHeader extends Component {
  render() {
    return (
      <nav>
      <div  style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
        <div>
          <img style={{height:50,width:100}} src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"alt="website logo"/>
        </div>

        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
          <Link to="/">Home</Link>
          <Link to="/NxtProducts" >Products</Link>
          <Link to="/NxtCart">Cart</Link>
          <button onClick={this.onSubmit}>Logout </button>
          <button style={{height:20,width:20}} onClick={this.onSubmit}><img style={{height:10,width:10}} src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"alt="nav logout"/></button>
        </div>
      </div>
    </nav>
    )
  }
}

export default NxtHeader