// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)
  .post(controller.post)

router
  .route('/products/:_id')
  .put(controller.put)
  .delete(controller.delete)
  .get(controller.get1)

router
  .route('/name')
  .get(controller.getName)
// router
//   .route('/name')
//   .get(controller.get)
//   server.get('/name', (req, res) => {
//     res.status(200).send('This is your get request, modify this file to use your router!')
//   })
  
//   server.post('/name', (req, res) => {
//     res.status(200).send('This is your post request, modify this file to use your router!')
//   })
  
//   server.put('/name', (req, res) => {
//     res.status(200).send('This is your put request, modify this file to use your router!')
//   })
  
//   server.delete('/name', (req, res) => {
//     res.status(200).send('This is your delete request, modify this file to use your router!')
//   })


module.exports = router