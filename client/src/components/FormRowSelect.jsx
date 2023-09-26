import React from "react";

const FormRowSelect = ({ name, labelText, defaultValue, list, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue.GROUP} value={itemValue.VALUE}>
              {itemValue.GROUP}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
