import React, { Component } from 'react'

class Rjs extends Component {
    state={
        btnn:false,
        first:'',
        last:'',
        sub:false,
        para:false

    }
    onSubmit=()=>{
        if(this.state.first==='' && this.state.last === ""){
        this.setState({btnn:true,para:true,sub:false})
    }else if (this.state.first !== "" && this.state.last !==""){
      this.setState({btnn:false,para:false,sub:true})
    }else if (this.state.first !== "" && this.state.last===""){
      this.setState({btnn:false,para:true,sub:false})
    }else if (this.state.first === "" && this.state.last !==""){
      this.setState({btnn:true,para:false,sub:false})                
    }
  }
  render() {
    return (
        <div style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
        <h1>Registration </h1>
        {this.state.sub? (<div>
            <img style={{height:250,width:250}} src='https://as2.ftcdn.net/v2/jpg/01/39/40/89/1000_F_139408942_9BaEhxpY7Ig0IEnGuGDF5BzW4DPrXNKW.jpg' alt='tick mark'/>
            <p>Submitted successfully</p>
            <button onClick={()=>this.setState({sub:false,first:'',last:''})}>Submit Another Response</button>
        </div>) : (<div style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
        <input value={this.state.first} onChange={(e)=>this.setState({first:e.target.value})} placeholder='First name'/>
        {this.state.btnn && <p style={{color:'red'}}> Required field </p>}
        <input value={this.state.last} onChange={(e)=>this.setState({last:e.target.value})} placeholder='Last name'/>
        {this.state.para && <p style={{color:'red'}}> Required field </p>}
        <button onClick={this.onSubmit}>submit</button>
      </div>)}
    </div>
    )
  }
}


export default Rjs