import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

import { Button, Input } from '../../components';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: ''
      }
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
    this.setState({
      user: nextProps.user
    });
  }

  handleChange = newObj => {
    const { user } = this.state;
    user[newObj.name] = newObj.value;
    this.setState({user});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    this.props.updateUser(user);
  }

  renderBody() {
    const { error, loading } = this.props;
    const { user } = this.state;

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" name="firstName" onChange={this.handleChange} value={user.firstName} placeholder="Firstname"/>
        <Input type="text" name="lastName" onChange={this.handleChange} value={user.lastName} placeholder="Lastname"/>
        <Button color="primary" submit>Update</Button>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderBody()}
      </div>
    )
  }
}

const mapStateToProps = state => (state.user.detail);
const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(userActions.fetchUser(id)),
  updateUser: (user) => dispatch(userActions.update(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
