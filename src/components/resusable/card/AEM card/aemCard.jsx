import './aemCard.css'

const AemCard = ({title, text1,text2}) => {
    return (
        <div className="aemcard_container">
            <div className="aemcard_content">
            <p className='aemcard_title'>{title}</p>
            <ul className='aemcard_list'>
                <li>{text1}</li>
                <li>{text2}</li>

            </ul>
            </div>
            
        </div>
    )

}

export default AemCard;