import React, { Component } from 'react';
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class CommentsApp extends Component {
    state={
      title:"",
      desrpton:"",
      array:[]
    }
      onAdd=()=>{
        const obj={
          id:new Date(),
          title:this.state.title,
          desrpton:this.state.desrpton
        }
        this.setState({array:[...this.state.array,obj],title:'',desrpton:""})
      }
      onDel=(id)=>{
        const flt = this.state.array.filter(item=>
          item.id !== id )
this.setState({array:flt})
      }
  render() {
    console.log(this.state.array)
    return (
      <div>
        <h1>CommentsApp</h1>
        <input value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} placeholder='title' type='text'/>
        <input value={this.state.desrpton} onChange={(e)=>this.setState({desrpton:e.target.value})} style={{height:80,width:70}} placeholder='title' type='text'/>
        <button onClick={this.onAdd}>Click</button>
        {this.state.array.map(each=>
          <div>
            <h1>{each.title}</h1>
            <p>{each.desrpton}</p>
            <button onClick={()=>this.onDel(each.id)}>del</button>
            </div>)}
      </div>
    )
  }
}

export default CommentsApp