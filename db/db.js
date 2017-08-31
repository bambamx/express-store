const Sequelize = require('sequelize');
var config = require('../config/config');
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.pass, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = {
  connection: sequelize,
  test: function(){
    return sequelize.authenticate()
  }
};
