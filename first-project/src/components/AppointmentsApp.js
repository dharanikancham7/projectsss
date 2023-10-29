import React, { Component } from 'react'

export class AppointmentsApp extends Component {
  state={
    tittle:'',
    date:'',
    array:[]
  }
  onApp=()=>{
    const obj = {
      id:new Date(),
      tittle:this.state.tittle,
      date:this.state.date
    }
    this.setState({array:[...this.state.array,obj]})
  }
  onDel=(id)=>{
    const fil = this.state.array.filter(item=>
      item.id !== id )
      this.setState({array:fil})

  }
  render() {
    console.log(this.state.array)
    return (
      <div>
        <input onChange={(e)=>this.setState({tittle:e.target.value})} placeholder='tttle' type="text"/>
        <input onChange={(e)=>this.setState({date:e.target.value})}  type="date"/>
        <button onClick={this.onApp}>add</button>
        <h1>AppointmentsApp</h1>
        {this.state.array.map(each=>
          <div>
            <p>{each.tittle}</p>
            <p>{each.date}</p>
            <button onClick={()=>this.onDel(each.id)}>del</button>
            </div>)}
      </div>
    )
  }
}

export default AppointmentsApp