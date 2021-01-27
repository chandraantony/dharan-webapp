const { Model } = require('objection');
const knex = require('../config/knex')

Model.knex(knex)

class MenuImage extends Model {
    static get tableName() {
      return 'menu_image';
    }
  
    static get relationMappings() {
        const Menu = require('./menu')
        return {
            menu : {
                relation: Model.BelongsToOneRelation,
                modelClass: Menu,
                join: {
                    from: 'menu_image.menu_id',
                    to: 'menu.id'
                }
            }
        }
    }
  }
  
  module.exports = MenuImage;