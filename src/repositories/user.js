const Customer = require('../../models/customer')

exports.getAllUser = () => {
    const data = Customer.query()
    return data 
}

exports.deleteUser = (id) => {
    const data = Customer.query().deleteById(id)
    return data 
}

exports.updateData = (id,arg) => {
    const data = Customer.query().findById(id).patchAndFetchById(id, arg);
    return data
}

exports.findById = (id) => {
    const data = Customer.query().findById(id)
    return data 
}