import React, { Component } from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        filterValue: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      filterValue: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter: </label>
        <input type="text" id="filter" 
          value={this.state.filterValue} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm