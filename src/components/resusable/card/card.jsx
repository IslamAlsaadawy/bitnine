import "./card.css";
const Card = ({ classname, text1, text2, text3 }) => {
  const cardname = `card_image ${classname}`;
  return (
    <div className="card_container">
      <div className={cardname}>
        <ul className="card_list">
          <li>{text1}</li>
          <li>{text2}</li>
          <li>{text3}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
