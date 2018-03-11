import React from 'react';
import PropTypes from 'prop-types';

class MyLabel extends React.Component {
  render() {
    const { children, htmlFor } = this.props;

    return (
      <label htmlFor={htmlFor}>{children}</label>
    );
  }
}

MyLabel.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string
};

export default MyLabel;
