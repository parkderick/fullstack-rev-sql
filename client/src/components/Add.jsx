import React from 'react'
import Axios from 'axios';

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      min_cost: '',
      curr_bid: '',
      ends_in: '',
      image: ''
    }
    this.postItem = this.postItem.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  postItem() {
    Axios.post('/products', {
      item: this.state.item,
      min_cost: this.state.min_cost,
      curr_bid: this.state.curr_bid,
      ends_in: this.state.ends_in
    })
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return(
      <div>
        <input placeholder="Enter item" name="item" onChange={this.onChange}></input>
        <input placeholder="Min Cost" name="min_cost" onChange={this.onChange}></input>
        <input placeholder="Current Bid" name="curr_bid" onChange={this.onChange}></input>
        <input placeholder="Days it Ends in" name="ends_in" onChange={this.onChange}></input>
        <input placeholder="Image" name="image" onChange={this.onChange}></input>
        <button onClick={this.postItem}>ADDD</button>
      </div>
    )
  }
}

export default Add;