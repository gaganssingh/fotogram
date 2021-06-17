const Button = ({
  type,
  customClasses,
  children,
  disabled = false,
  onClick = () => {},
}) => (
  <button
    type={type}
    disabled={disabled}
    className={customClasses}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
