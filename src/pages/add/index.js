import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import { Button, Input } from '../../components';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: ''
      }
    };
  }

  handleChange = newObj => {
    const { user } = this.state;
    user[newObj.name] = newObj.value;
    this.setState({user});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;

    this.props.addUser(user);

    // Reset state
    this.setState({
      user: {
        firstName: '',
        lastName: ''
      }
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" name="firstName" onChange={this.handleChange} value={user.firstName} placeholder="Firstname"/>
          <Input type="text" name="lastName" onChange={this.handleChange} value={user.lastName} placeholder="Lastname"/>
          <Button color="primary" submit>Submit</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: (newUser) => dispatch(userActions.add(newUser))
})

export default connect(null, mapDispatchToProps)(Add);
