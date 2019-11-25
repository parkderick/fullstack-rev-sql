const mysql = require('mysql');

const db = mysql.createConnection({
  user: "root",
  password: "",
  database: "mock"
})

db.connect((err) => {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log('Connected to Database mock')
  }
})

module.exports = db