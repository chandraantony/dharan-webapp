const Comment = require('../../models/comment')
const Customer = require('../../models/customer')


exports.comment = () => {
    const data = Comment.query().withGraphFetched('human')
    return data
}