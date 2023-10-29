// Write your code here
import React,{Component} from 'react';
const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {
    data:this.suggestionsList,
    searchInput: ''
  }
  
  onChangeSearchInput = (e) => {
    const fil = this.state.data.filter(each=>
      this.state.each.suggestion.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    this.setState({data:fil})
  }

  render() {
    const {searchInput} = this.state
  
    return (
      <div className="app-container">
      <input type="search" placeholder="Search Google" 
      onChange={this.onChangeSearchInput} value={searchInput}/>
      </div>    
    )
  }
}

export default GoogleSuggestions