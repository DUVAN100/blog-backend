const articleController  = (req, res)=>{
    return res.status(200).json({
        mensaje:"i'm  a action of test controller"
    })
}

const save  = (req, res)=>{
    return res.status(200).json()
}
module.exports = {
    articleController,
    save
}