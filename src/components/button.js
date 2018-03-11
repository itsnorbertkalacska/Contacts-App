import React from 'react';
import PropTypes from 'prop-types';

class MyButton extends React.Component {
  render() {
    const { children, className, color, onClick, submit } = this.props;

    let myClass = 'btn';
    if (color) myClass += ` btn-${color}`;

    if (className) myClass += ` ${className}`;

    let type = 'button';
    if (submit) type = 'submit';

    return (
      <button
        className={myClass}
        onClick={onClick}
        type={type}
        >
        {children}
      </button>
    );
  }
}

MyButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  submit: PropTypes.bool
};

export default MyButton;
