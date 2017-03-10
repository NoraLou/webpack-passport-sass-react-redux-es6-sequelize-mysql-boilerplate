/* example models */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql', 'root', 'root', {
  host: "127.0.0.1",
  port: 3306
});

/*const User = sequelize.define(
  'users',
  {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    email: {
      type: Sequelize.STRING,
      field: 'email'
    }
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);

User.sync({force: true}).then(function() {
module.exports = {
  User: User,
  sequelize: sequelize,
};*/
