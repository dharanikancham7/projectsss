import React, { Component } from 'react';
const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class CapitalsApp extends Component {
   
      state={
        data:countryAndCapitalsList[0].country,
        bool:false
      }
      onOpen = (id) =>{
this.setState({data:id})
      }

            
  render() {
  
    return (
      <div>
        <h1>{this.state.data}</h1>
        <h1>CapitalsApp</h1>
      <button onClick={()=>this.setState({bool:!this.state.bool})}>
      <div style={{height:18,width:100,border:"solid",borderWidth:2}}>
        </div>
      </button>
       
{ this.state.bool && countryAndCapitalsList.map(item=>
  <div>
    <button onClick={()=>this.onOpen(item.country)}>
    <p>{item.id}</p>
    </button>
   
    </div>)}
      </div>
    )
  }
}

export default CapitalsApp