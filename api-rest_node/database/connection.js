const { connect } = require('mongoose');
const objectConfig = require('../config/env');

const connection = async () => {
    const {URL_CONNECTION_LOCAL_MY_BLOG} = objectConfig;
    try {
        await connect(URL_CONNECTION_LOCAL_MY_BLOG)
        console.log("connect to database successfull  !!!")
    } catch (error) {
        console.log("Error: ", error)
        throw new Error("couldn't connect to the database")
    }
}

module.exports = {
    connection
}
