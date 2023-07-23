import './custombutton.css'

const CustomButton = ({className,handleClick, children}) => {
    // Combine custombutton class with any additional class names passed in via props
    const buttonClass = `custombutton ${className || ''}`;
  
    return (
      <button className={buttonClass} onClick={handleClick}>
        {children}
      </button>
    );
  };
  

  export default CustomButton;