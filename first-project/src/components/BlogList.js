
import React, { Component } from 'react'

export class BlogList extends Component {
    state={
        array:[],
        bool:false,
        array2:[],
    }
   async componentDidMount(){
        const data = await fetch("https://apis.ccbp.in/blogs")
        const res = await data.json()
        this.setState({array:res})
    }
    onNavgate= async(id)=>{
      console.log(id)
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const res = await response.json()
       await this.setState({array2:[res],bool:true})
    }

  render() {
    console.log(this.state.array2)
    return (
      <div>
        <p>BlogList</p>
     {this.state.bool ? <div>
      {this.state.array2.length >= 1  && this.state.array2.map(each=>
            <div>

                <h1>{each.title}</h1>
                <p>{each.topic}</p>
               
                <img src={each.image_url} style={{height:150, width:150}} alt="sai"/>
                
               
                
                <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                <img src={each.avatar_url} style={{height:25, width:25}} alt='dgs'/>
                <p>{each.content}</p>
                </div>
                
            </div>)}
     </div> : <div>
     {this.state.array.map(each=>
            <div>

                <h1>{each.title}</h1>
                <p>{each.topic}</p>
                <button onClick={()=>this.onNavgate(each.id)} >
                <img src={each.image_url} style={{height:150, width:150}} alt="sai"/>
                </button>
               
                
                <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                <img src={each.avatar_url} style={{height:25, width:25}} alt='dgs'/>
                <p>{each.author}</p>
                </div>
                
            </div>)}</div>}  
      </div>
    )
  }
}

export default BlogList