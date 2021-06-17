const Button = ({ customClasses, children, disabled = false, type }) => (
  <button type={type} disabled={disabled} className={customClasses}>
    {children}
  </button>
);

export default Button;
