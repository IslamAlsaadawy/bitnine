import './blueButtonLink.css'
const BlueButton = ({ text, link }) => {
  return (

    <a className='blueButton' href= {link}> {text}</a>
  )
  };

export default BlueButton;