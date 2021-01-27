const { Model } = require('objection');
const knex = require('../config/knex')

Model.knex(knex)

class Customer extends Model {
    static get tableName() {
      return 'customer';
    }
  
    static get relationMappings() {
        const Comment = require('./comment')
        return {
            messages: {
                relation: Model.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: 'customer.id',
                    to: 'comment.customer_id'
                }
            }
        }
    }
  }
  
  module.exports = Customer;