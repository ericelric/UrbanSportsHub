import './Button.css';

const Button = ({ onClick, children, buttonType = '', type = 'button', ...props }) => {
  return (
    <button
      className={`button ${buttonType ? `button--${buttonType}` : ''}`.trim()}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
