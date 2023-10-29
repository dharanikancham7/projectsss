import React,{Component} from "react";
class EvenOddApp extends Component{
    state={
        count:0
    }

    onIncrement=()=>{
        const newrandomNumber =Math.ceil(Math.random()*100)
        this.setState({count:newrandomNumber})
    }
render(){
    const{count}=this.state
    return(
    <div>
    <h1>count {count}</h1>
    <p>count is {count%2===0?'Even':'Odd'}</p>
    <button onClick={this.onIncrement}>Increment</button>
    <p className="note">*Increase By Random Number Between 0 to 100</p>
    </div>
    )
}
}
export default EvenOddApp
