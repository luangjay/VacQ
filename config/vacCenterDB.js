const mysql = require('mysql')

var connection = mysql.createPool({
  host: 'winhost',  // localhost
  user: 'root',
  password: '1234',
  database: 'vacCenter',
})

module.exports = connection
