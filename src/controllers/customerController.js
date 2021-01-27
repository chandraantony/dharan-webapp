const e = require('express')
const customerRepo = require('../repositories/user')

exports.getCustomer = async (req,res,next) => {
    try {
        const data = await customerRepo.getAllUser()
        res.json(data)
    } catch (error) {
        next(error)
    }
}

exports.customerById = async(req,res,next) => {
    try {
        const id = req.params.id
        const data = await customerRepo.findById(id)
        res.json(data)
    } catch (error) {
        next(error)
    }
}

exports.updateCustomer = async (req,res,next) => {
    try {
        const id = req.params.id
        const data = req.body
        const update = await customerRepo.updateData(id,data) 
        res.json(update)
    } catch (error) {
        next(error)
    }
}

exports.deleteCustomer = async (req,res,next) => {
    try {
        const id = req.params.id
        const del = await customerRepo.deleteUser(id)
        if(del){
            res.json(del)
        }else[
            res.json(del)
        ]
        
    } catch (error) {
        next(error)
    }
}