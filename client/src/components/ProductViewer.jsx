import React from 'react';
import Axios from 'axios';

class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bid: ''
    }
    this.newBid = this.newBid.bind(this)
  }

  newBid(id) {
    Axios.put(`/products/${id}`, {
      curr_bid: this.state.bid
    })
      .then(() => this.props.getProducts())
      .then(() => this.props.changeCurrentProduct(id))
      .catch(err => console.log(err))
  }
  
  render() {
    if (this.props.current !== null) {
      return (
        <div className = 'product-viewer'>
          <div>Product: {this.props.current.item}</div>
          <div>Minimum Cost: {this.props.current.min_cost}</div>
          <div>Current Bid: {this.props.current.curr_bid}</div>
          <div>Days Left: {this.props.current.ends_in}</div>
          <img src={this.props.current.image}></img>
          <input placeholder="Enter Bid Amount" type="number" value={this.state.bid} onChange={(e) => this.setState({bid: e.target.value}, () => console.log(this.state.bid))}></input>
          <button onClick={() => this.newBid(this.props.current.id)}>SUBMIT</button>
        </div>
      )
    } else {
      return null
    }
  }
}

export default ProductViewer;

