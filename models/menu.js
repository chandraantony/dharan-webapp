const { Model } = require('objection');
const knex = require('../config/knex')

Model.knex(knex)

class Menu extends Model {
    static get tableName() {
      return 'menu';
    }
  
    static get relationMappings() {
        const MenuImage = require('./menuImages');
        return {
            list_image : {
                relation: Model.HasManyRelation,
                modelClass: MenuImage,
                join: {
                    from: 'menu.id',
                    to: 'menu_image.menu_id'
                }
            }
        }
    }
  }
  
  module.exports = Menu;