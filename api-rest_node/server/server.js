const express  = require('express');
const cors = require('cors');
const objectConfig = require('../config/env');
const routersArticles = require('../routes/artricle');

const connectSeverNode = ()=>{
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    //upload routesarticles
    app.use("/api", routersArticles)
    const {PORT_SERVER_NODE}= objectConfig;

    app.listen(PORT_SERVER_NODE, ()=>{console.log(`server node run in port ${PORT_SERVER_NODE}`)})
} 
module.exports = {
    connectSeverNode
};

