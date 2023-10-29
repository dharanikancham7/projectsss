import React,{Component} from "react";
class FruitsCounter extends Component{
    state={
        mango:0,
        banana:0
    }
    onBanana=()=>{
        this.setState({banana:this.state.banana+1})
    }
    onMango=()=>{
        this.setState({mango:this.state.mango+1})
    }
    render(){
        return(
            <div>
                <p>Bob ate {this.state.mango} Mangoes and {this.state.banana} Bananas</p>
                <div>
                    <img style={{height:100, width:100}} src="https://assets.ccbp.in/frontend/react-js/mango-img.png " alt="mango"/>
                    <button onClick={this.onMango}>Eat Mango</button>
                </div>
                <div>
                    <img style={{height:100, width:100}} src="https://assets.ccbp.in/frontend/react-js/banana-img.png " alt="banana"/>
                    <button onClick={this.onBanana}>Eat Banana</button>
                </div>
            </div>
        )
    }
}
export default FruitsCounter;
