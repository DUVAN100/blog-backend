const { connection } = require('./database/connection');
const { connectSeverNode }  = require('./server/server')
 
// connection database
connection()
// conect server node
connectSeverNode()
