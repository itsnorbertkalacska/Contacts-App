import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import { Input } from '../../components';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  handleChange = newObj => {
    const { state } = this;
    state[newObj.name] = newObj.value;
    this.setState({state});
  }

  renderList() {
    const { error, loading, list } = this.props;
    const { search } = this.state;

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error...</p>;

    const filteredList = list.filter(item => (
      item.lastName.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
      item.firstName.toLowerCase().indexOf(search.toLowerCase()) > -1
    ));

    return (
      <ul className="list-group">
        {filteredList.map(user => (
          <li key={user.id} className="list-group-item">
            <Link to={`/${user.id}`}><strong>{user.lastName}</strong>, {user.firstName}</Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { search } = this.state;

    return (
      <div>
        <Input name="search" onChange={this.handleChange} value={search} placeholder="Search"/>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => (state.user.users);
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(userActions.fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);