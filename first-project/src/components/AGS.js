import React, { Component } from 'react'
class AGS extends Component {
  state={
    Name:"",
    array:[]
  }
    onAdd=()=>{
      const obj={
        id:new Date(),
        Name:this.state.Name,
      }
      this.setState({array:[...this.state.array,obj],Name:''})
    }

    onSearch=(e)=>{
      const filsearch=this.state.array.filter(item=>
      item.Name.includes(e.target.value))
      this.setState({array:filsearch})

      }
    

    onDel=(id)=>{
      const flt = this.state.array.filter(item=>
        item.id !== id )
this.setState({array:flt})
    }
render(){
  return (
    <div>
      <h1>Please Enter Your Name</h1>
      <input type='search' onChange={this.onSearch}/>
      <input value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})} placeholder='Name' type='text'/>
      <button onClick={this.onAdd}>Add</button>

      {this.state.array.map(item=>
        <div style={{display:"flex"}}>
          <h1>{item.Name}</h1>
          <button onClick={()=>this.onDel(item.id)}>del</button>
          </div>)}
    </div>
  )
}
}

export default AGS
