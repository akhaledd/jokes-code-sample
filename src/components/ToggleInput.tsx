import React from "react";

interface Props {
  name: string;
  id: string;
  checked?: boolean;
  onChange: () => void;
}

const ToggleInput: React.FC<Props> = ({ name, id, checked, onChange }) => {
  return (
    <label className='toggle-input' htmlFor={id}>
      <input
        className='toggle-input__elem'
        onChange={onChange}
        type='checkbox'
        name={name}
        checked={checked}
        id={id}
      />
      <span className='toggle-input__val'></span>
    </label>
  );
};

ToggleInput.defaultProps = {
  checked: false,
};

export default ToggleInput;
