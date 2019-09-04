import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import query from './query';

const addUser = gql`
  mutation makeUser($name: String!) {
    makeUser(name: $name) {
      id
      name
      car {
        make
      }
    }
  }
`;

class AddUser extends Component {
  state = {
    name: '',
  };

  resetFields = () => {
    this.setState({ name: '' });
  };

  nameChanged = ({ targer: { value } }) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <Mutation mutation={addUser} refetchQueries={[{
        query: query
      }]} awaitRefetchQueries={true}>
        <form
          onSubmit={evt => {
            evt.preventDefault();
            //   makeUser({
            //     variables: {
            //       name: this.state.name;
            // }
            // })
            this.resetFields;
          }}
        >
          <label>
            <span>Name</span>
            <input
              type="text"
              value={this.state.name}
              onChange={this.nameChanged}
            />
          </label>
          <div>
            <button>Add User</button>
          </div>
        </form>
      </Mutation>
    );
  }
}

export default AddUser;
