import React, { Component } from 'react'

export class RegistrationForm extends Component {
    state={
        bool:false,
        name:"",
        age:"",
        sub:false
    }
    onSubmit=()=>{
        if(this.state.name === "" ){
            this.setState({bool:true})
        }else{
            this.setState({bool:false,sub:true})
        }
    }
  render() {
    return (
      <div>
        <h1>RegistrationForm</h1>
        {this.state.sub ? <div><p>submit succchdc</p>
            <button onClick={()=>this.setState({sub:false})}>back</button>

        </div> :  <div>
        <input value={this.state.name} placeholder='name' onChange={(e)=>this.setState({name:e.target.value})}/>
        {this.state.bool && <p style={{color:"red"}}>fild is required</p>}
        <input placeholder='age' onChange={(e)=>this.setState({age:e.target.value})}/>
        {this.state.bool && <p style={{color:"red"}}>fild is required</p>}
        <button onClick={this.onSubmit}>submit</button>
        </div> }
       
      </div>
    )
  }
}

export default RegistrationForm