import React from 'react';
import { bool, func, string } from 'prop-types';

import Aux from '../../hoc/Aux/Aux';

const Checkbox = (props) => {
  const { country, label, name, checked, onChange } = props;

  return (
    <Aux>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <img
          src={`${process.env.PUBLIC_URL}/country/${country}.jpg`}
          alt={name}
        />
        {label}
      </label>
    </Aux>
  );
};

Checkbox.propTypes = {
  country: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  checked: bool.isRequired,
  onChange: func.isRequired,
};

export default Checkbox;
