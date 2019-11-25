// Controller here
// complete building out the controller

const helper = require('../db/dbhelpers');

const controller = {
  get: (req, res) => {
    helper.getProductsHelper(req, (err, result) => {
      if (err) {
        res.status(404).send(`ERROR with get request, ${err}`)
      } else {
        res.status(200).send(result)
      }
    })
  },
  get1: (req, res) => {
    helper.getProductHelper(req, (err, result) => {
      if (err) {
        res.status(404).send(`ERROR with get request, ${err}`)
      } else {
        console.log(result)
        res.status(200).send(result)
      }
    })
  },
  post: (req, res) => {
    helper.postProductsHelper(req, (err, result) => {
      if (err) {
        res.status(404).send(`ERROR with post request, ${err}`)
      } else {
        res.status(200).send('Success with post request')
      }
    })
  },
  put: (req, res) => {
    helper.updateProductHelper(req, (err, result) => {
      if (err) {
        res.status(404).send(`ERROR with put request, ${err}`)
      } else {
        res.status(200).send('Success with put request')
      }
    })
  },
  delete: (req, res) => {
    helper.deleteProductHelper(req, (err, result) => {
      if (err) {
        res.status(404).send(`ERROR with delete request, ${err}`)
      } else {
        res.status(200).send(`Success with delete request`)
      }
    })
  },
  getName: (req, res) => {
    helper.getName(req, (err, result) => {
      if (err) {
        res.status(404).send(`Error getting Name In, ${err}`)
      } else {
        res.status(200).send('TRUE')
      }
    })
  }
}

module.exports = controller