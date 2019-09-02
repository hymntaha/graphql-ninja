let users = [
  {
    id: 1,
    name: 'Taha',
    cars:[1,2]
  },
  {
    id: 2,
    name: 'Susan',
    cars:[]
  },
  {
    id: 1,
    name: 'Vanessa',
    cars:[3]
  },
];

let cars = [
  {
    id: 1,
    make: 'Ford',
    model: 'Focus',
    color: 'red',
    ownedBy:1
  },
  {
    id:2,
    make: 'Mercedes',
    model: 'C300',
    color: 'white',
    ownedBy:1
  },
  {
    id:1,
    make: 'Lincoln',
    model: 'Navigator',
    color: 'blue',
    ownedBy:2
  }
];

module.exports = {
  users,
  cars
};
