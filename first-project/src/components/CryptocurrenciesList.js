import React, { Component } from 'react'
import { Bars } from 'react-loader-spinner'

export class CryptocurrenciesList extends Component {
  state={
    array:[],
    bool:true
  
}
async componentDidMount(){
    const data = await fetch("https://apis.ccbp.in/crypto-currency-converter")
    const res = await data.json()
    this.setState({array:res,bool:false})
}
  render() {
    return (
      <div>
        <h1>CryptocurrenciesList</h1>
       
{this.state.bool ?  <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> : <p>fhjkhjfkhkjfjkf</p>}

      </div>
    )
  }
}

export default CryptocurrenciesList