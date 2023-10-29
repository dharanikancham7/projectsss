import React,{Component} from "react";
class Clickcounter extends Component{
    state={
        add:0,
    }
    OnAdd=()=>{
        const{add}=this.state
        this.setState({add:add+1})
    }
    render(){
        const{add}=this.state
        return(
            <div>
                <h1>The button has been clicked {add} times</h1>
                <p>Click the button to increase the count!</p>
                <button onClick={this.OnAdd}>Click Add</button>
            </div>
        )
    }

}
export default Clickcounter;
