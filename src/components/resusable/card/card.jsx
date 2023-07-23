import './card.css'
const Card = ({ backgroundUrl   ,text1, text2, text3}) => {

    return(
        <div className="card_container">
        {/* <div className="card_container"> */}
            <div className="card_image" >
            <ul className="card_list">
            <li>{text1}</li>
            <li>{text2}</li>
            <li>{text3}</li>

        </ul>

            </div>
         
        </div>
    )
} 

export default Card;