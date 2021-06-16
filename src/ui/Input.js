import { useEffect, useRef } from "react";

const Input = ({
  type,
  customClasses,
  placeholder,
  ariaLabel,
  focusOnPageLoad = false,
  onChange = () => {},
}) => {
  // Focus input on page load
  const inputRef = useRef();
  useEffect(() => {
    if (focusOnPageLoad) {
      inputRef.current.focus();
    }
  }, [focusOnPageLoad]);

  return (
    <input
      type={type}
      ref={inputRef}
      className={customClasses}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={onChange}
    />
  );
};

export default Input;
