const repoUser = require('../repositories/user')

exports.login = async (req,res,next) => {
    try {
        res.json({
            msg :succes
        })
    } catch (error) {
        next(error)
    }
}
