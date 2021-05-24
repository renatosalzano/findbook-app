import { memo } from "react";

const InputText = ({
  placeholder,
  onChange,
  value,
  class_name,
  target_name,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      type="text"
      name={target_name}
      className={class_name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default memo(InputText);
