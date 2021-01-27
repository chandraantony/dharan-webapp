const commentRepo = require('../repositories/comment')

exports.getComment = async (req,res,next) => {
    try {
        const data = await commentRepo.comment('customer')
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}