const menuRepo = require('../repositories/menu')

exports.todayMenu = async (req,res,next) => {
    try {
        const menu = await menuRepo.getAllMenu()
        console.log(menu)
        res.json(menu)
    } catch (error) {
        next(error)
    }
}