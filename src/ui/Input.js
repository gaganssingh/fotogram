const Input = ({
  type,
  customClasses,
  placeholder,
  ariaLabel,
  onChange = () => {},
}) => (
  <input
    type={type}
    className={customClasses}
    placeholder={placeholder}
    aria-label={ariaLabel}
    onChange={onChange}
  />
);

export default Input;
