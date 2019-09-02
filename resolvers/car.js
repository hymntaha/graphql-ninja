const resolvers = {
  Query: {
    cars: () => cars,
    car: (parent, { id }) => {
      const car = cars.filter(car => car.id === id);
      return car[0];
    },
  },
  Mutation: {
    createCar: (parent, { id, make, model, color }) => {
      const car = {
        id,
        make,
        model,
        color
      };
      cars.push(car);
      return car;
    },
    removeCar:(parent, {id}) =>{
      let found = false;
      cars = cars.filter(car=>{
        if (car.id === id) {
          found = true;
        } else {
          return car;
        }
      });
    }
  },
  Car: {
    owner: parent => users[parent.ownedBy - 1],
  }
};

module.exports = resolvers;
