// complete and fix the dbhelpers
const db = require('./index');

const helper = {
  getProductsHelper: (req, callback) => {
    db.query(`SELECT * from products;`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  getProductHelper: (req, callback) => {
    db.query(`SELECT * from products where id="${req.params._id}";`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  postProductsHelper: (req, callback) => {
    db.query(`INSERT into products (item, min_cost, curr_bid, ends_in) VALUES ("${req.body.item}", "${req.body.min_cost}", "${req.body.curr_bid}", "${req.body.ends_in}");`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  updateProductHelper: (req, callback) => {
    db.query(`UPDATE products set curr_bid="${req.body.curr_bid}" where id=${req.params._id};`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  deleteProductHelper: (req, callback) => {
    db.query(`DELETE from products where id=${req.params._id};`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  getName: (req, callback) => {
    db.query(`SELECT * from users where username="${req.body.username}" and password="${req.body.password}";`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  }
}

module.exports = helper
