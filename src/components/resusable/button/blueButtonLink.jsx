import "./blueButtonLink.css";
const BlueButton = ({ text, link, componenet, classname, handleClick }) => {
  const className = `blueButton ${classname || ""}`;
  return (
    <a className={className} onClick={handleClick} href={link}>
      {text} {componenet}
    </a>
  );
};

export default BlueButton;
