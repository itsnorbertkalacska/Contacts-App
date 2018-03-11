import React from 'react';
import PropTypes from 'prop-types';

import Label from './label';

class MyInput extends React.Component {
  handleChange = e => {
    const { name } = this.props;
    this.props.onChange({ name, value: e.currentTarget.value });
  }

  render() {
    const { className, label, name, placeholder, type, value } = this.props;

    let myClass = 'form-control';
    if (className) myClass += ` ${className}`;

    let labelElement = null;
    if (label) labelElement = <Label htmlFor={name}>{label}</Label>

    return (
      <div className="form-group">
        {labelElement}
        <input
          className={myClass}
          id={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          type={type}
          value={value}
          />
      </div>
    );
  }
}

MyInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default MyInput;
