import React from 'react';

const Select = props => (
  <div className="form-group">
    <label htmlFor={props.name}> {props.title} </label>
    <select name={props.name} value={props.value} onChange={props.handleChange}>
      <option value="" disabled>
        {props.placeholder}
      </option>
      {props.options.map(opt => (
        <option key={opt} value={opt} label={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
