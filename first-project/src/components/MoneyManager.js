import React, { Component } from 'react'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
    state={
      title:"",
      amont:"",
      bal:0,
      total:0,
      array:[],
      bool:false,
      exp:0
    }
      onBal=()=>{
        const obj ={
          id:new Date(),
          title:this.state.title,
          amont:this.state.amont
        

        }
        this.setState({array:[...this.state.array,obj],bal:this.state.amont,total:this.state.amont,bool:true})
      }
      onDel=(id)=>{
const fil = this.state.array.filter(item=>
  item.id !== id) 
  this.setState({array:fil})
      }
      onExp=()=>{
        this.setState({total:this.state.total- this.state.exp,bool:false})
      }
  render() {

    return (
      <div>
        <h1>MoneyManager</h1>
        <div style={{display:"flex"}}>
        <h1>balance:{this.state.bal}</h1>
        <h1>total:{this.state.total}</h1>
        </div>
        <input onChange={(e)=>this.setState({title:e.target.value})} placeholder='title' type='text'/>
        <input  onChange={(e)=>this.setState({amont:e.target.value})} placeholder='amont' type="text"/>
        <button onClick={this.onBal}>submit</button>
        {this.state.bool && <input placeholder="expens" onChange={(e)=>this.setState({exp:e.target.value})}/>}
       <button onClick={this.onExp}>expens</button>
{this.state.array.map(each=>
  <div style={{display:"flex"}}>
    <p>{each.title}</p>
    <p>{each.amont}</p>
    <button onClick={()=>this.onDel(each.id)}>del</button>
    </div>)}
      </div>
    )
  }
}

export default MoneyManager