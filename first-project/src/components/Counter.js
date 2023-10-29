import React,{Component} from "react"
class Counter extends Component{
    state={
        count:0 
    }
    onAdd=()=>{
        this.setState({count:this.state.count+1})
    }
    onSubstract=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onAdd}>Increase</button>
        <button onClick={this.onSubstract}>Decrease</button>
      </div>
    )
  }
}
    // state={
    //     Count:0,
    // }
    // OnIncrease=()=>{
    //     const{Count}=this.state
    //     this.setState({Count:Count+1})
    // }
    // OnDecrease=()=>{
    //     const{Count}=this.state
    //     this.setState({Count:Count-1})
    // }
    // render(){
    //     const{Count}=this.state
    //     return(
    //         <div>
    //             <h1>count{Count}</h1>
    //             <button onClick={this.OnIncrease}>Increase</button>
    //             <button onClick={this.OnDecrease}>Decrease</button>
    //         </div>
    //     )



export default Counter;