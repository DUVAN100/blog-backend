const {Schema, model} = require('mongoose');

const ArtcileSchema = Schema({
    title: {
        type: String, 
        require:true
    },
    content: {
        type: String, 
        require:true
    },
    date: {
        type: Date,
        default:now, 
    },
    image: {
        type: String,
        default: "default.png", 
    }

})

module.exports = model("Article", ArtcileSchema, "articles")