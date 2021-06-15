const Button = ({ customClasses, children, disabled = false, type }) => (
  <button
    className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${customClasses}`}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
