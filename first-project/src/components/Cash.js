import React,{Component} from "react";
class Cash extends Component{
    state={
        bal:2000,
    }
    OnFifty=()=>{
        const{bal}=this.state
        this.setState({bal:bal-50})
    }
    OnHundred=()=>{
        const{bal}=this.state
        this.setState({bal:bal-100})
    }
    OnTwohundred=()=>{
        const{bal}=this.state
        this.setState({bal:bal-200})
    }
    render(){
        const{bal}=this.state

        return(
            <div>
                <h1>{bal}Balance</h1>
                <button onClick={this.OnFifty}>50</button>
                <button onClick={this.OnHundred}>100</button>
                <button onClick={this.OnTwohundred}>200</button>
            </div>
        )
    }
}
export default Cash;