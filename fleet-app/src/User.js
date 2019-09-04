import React, { Component } from 'react';
import { Query } from 'react-apollo';
import query from './query';

class User extends Component {
  render() {
    return (
      <div>
        <Query query={query}>
          {({ data }) => {
            return (
              <div>
                <ul>
                  {data.users.map(({ id, name, car }) => {
                    const list = (
                      <li key={id}>
                        {' '}
                        {name}
                        <ul>
                          {car.length !== 0 ? (
                            car.map(({ make, model, color }) => (
                              <li key={`${id}-${make}`}>
                                {make} {model}
                                {color}
                              </li>
                            ))
                          ) : (
                            <li>No car</li>
                          )}
                        </ul>
                      </li>
                    );
                    return list;
                  })}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default User;
