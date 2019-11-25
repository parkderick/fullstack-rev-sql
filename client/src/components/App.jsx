import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import Add from './Add'

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      current: null,
      username: '',
      password: '',
      login: false
    }
    this.getProducts = this.getProducts.bind(this)
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.confirmUser = this.confirmUser.bind(this)
  }

  getProducts () {
    axios.get('/products')
      .then(response => this.setState({
        products: response.data
      }))
      .catch(err => console.log(err))
  }

  changeCurrentProduct(id) {
    axios.get(`/products/${id}`)
      .then(response => this.setState({
        current: response.data[0]
      }))
      .catch(err => console.log(err))
  }

  confirmUser() {
    axios.get(`/name`, {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        if (response.data === 'TRUE') {
          this.setState({
            login: true
          })
      }})
      .catch(err => console.log(err))
  }

  handleForm(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state.username, this.state.password))
  }

  componentDidMount() {
    this.getProducts()
  }

  render() {
    if (this.state.login) {
      return (
        <div>
          <div>
            <h1>EBID</h1>
            <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
          </div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search />
            </div>
            <div>
              <Add getProducts={this.getProducts}/>
            </div>
          </nav>
            <div className="row main-container">
              <div className="col-md-7 product-viewer-container">
                <ProductViewer current={this.state.current} getProducts={this.getProducts} changeCurrentProduct={this.changeCurrentProduct}/>
              </div>
              <div className="col-md-5 product-list-container">
                <ProductList products={this.state.products} changeCurrentProduct={this.changeCurrentProduct}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <h1>EBID</h1>
            <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
          </div>
          <div>
            Username <input placeholder="Enter Username Here" name="username" onChange={this.handleForm}></input>
            Password <input placeholder="Enter Password Here" name="password" onChange={this.handleForm}></input>
            <button onClick={this.confirmUser}>Submit</button>
          </div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search />
            </div>
          </nav>
          <div className="row main-container">
            <div className="col-md-7 product-viewer-container">
              <ProductViewer current={this.state.current} getProducts={this.getProducts} changeCurrentProduct={this.changeCurrentProduct}/>
            </div>
            <div className="col-md-5 product-list-container">
              <ProductList products={this.state.products} changeCurrentProduct={this.changeCurrentProduct}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App;