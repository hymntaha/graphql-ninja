const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'root', '', {
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});
