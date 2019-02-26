import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
)

    Input.propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
      };

export default Input;