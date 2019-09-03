const car = (sequelize, DataTypes) => {
  const Car = sequelize.define('car', {
    make: {
      type: DataTypes.STRING,
    },
    model:{
      types: DataTypes.STRING
    },
    color:{
      type: DataTypes.STRING
    }
  });

  return Car;
};

module.exports = car;
