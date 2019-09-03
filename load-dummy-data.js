const { sequelize } = require('./models/database');
const models = require('./models');

const createData = async () => {
  await models.User.create(
    {
      name: 'Taha',
      cars: [
        {
          make: 'Mercedes',
          model: 'C300',
          color: 'white',
        },
      ],
    },
    {
      include: [models.Car],
    },
  );
  await models.User.create(
    {
      name: 'Steven',
      cars: [
        {
          make: 'Tesla',
          model: 'Model X',
          color: 'black',
        },
        {
          make: 'Audi',
          model: 'Q8',
          color: 'red',
        },
      ],
    },
    {
      include: [models.Car],
    },
  );
  await models.User.create(
    {
      name: 'Susan',
      cars: [
        {
          make: 'Chevy',
          model: 'Corvette',
          color: 'yellow',
        },
      ],
    },
    {
      include: [models.Car],
    },
  );
};

sequelize.sync.then(async () => {
  try {
    await createData();
    process.exit();
  } catch (err) {
    console.log(err);
  }
});
