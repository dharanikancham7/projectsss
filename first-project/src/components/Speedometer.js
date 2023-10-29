import React,{Component} from "react";
class Speedometer extends Component{
    state={
        count:0,
    }
    OnAccelerate=()=>{
        this.setState({count:this.state.count+10})
    }
    OnApplybrake=()=>{
        this.setState({count:this.state.count-10})
    }
    render(){
        
        return(
            <div bg-container>
                <h1>Speedometer</h1>
                <img  style={{height:500, width:1000}} alt="fswa" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"/>
                <h1>Speed is {this.state.count} mph</h1>
                <p>Min Limit is 0 mph, Max Limit is 200 mph</p>
                <div>
                    <button onClick={this.OnAccelerate}>Accelerate</button>
                    <button onClick={this.OnApplybrake}>Apply Brake</button>
                </div>

            </div>
        )
    }
}
export default Speedometer;
