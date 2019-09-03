const { sequelize } = require('./models/database');
const models = require('./models');

const createData = () => {
  models.User.create({
    name: "Taha",
    cars:[{
      make: 'Mercedes',
      model: 'C300',
      color: 'white'
    }]
  },{
    include:[models.Car]
  })
};

sequelize.sync.then(() => {
  createData();
});
