import "./custombutton.css";

const CustomButton = ({ className, handleClick, children }) => {
  const buttonClass = `custombutton ${className || ""}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
