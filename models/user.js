const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
    },
  });

  User.associate = models => {
    User.hasMany(models.Car, { onDelete: 'CASCADE' });
  };
  // Delete cascade delete child of the table
  return User;
};

module.exports = user;
