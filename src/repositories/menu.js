const Menu = require('../../models/menu');
const MenuImage = require('../../models/menuImages');

exports.getAllMenu = () => {
    const data = Menu.query().withGraphJoined('list_image').modifyGraph('list_image', builder => {
        builder.select('id')
      });
    
    return data 
}