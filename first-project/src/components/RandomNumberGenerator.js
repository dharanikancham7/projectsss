import React,{Component} from "react";
class RandomNumberGenerator extends Component{
    state={
        randomNumber:0,
    }
    onGenerateRandomNumber=()=>{
        const newrandomNumber =Math.ceil(Math.random()*100)
        this.setState({randomNumber:newrandomNumber})
    }
    render(){
        const{randomNumber}=this.state
        return(
            <div>
                <h1>Random Number</h1>
                <p>Generate a random number in the range 0 to 100</p>
                <button onClick={this.onGenerateRandomNumber}>Generate</button>
                <p>{randomNumber}</p>
            </div>
        )

    }
}
export default RandomNumberGenerator