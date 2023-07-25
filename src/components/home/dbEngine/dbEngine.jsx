import Card from '../../resusable/card/card'
import './dbEngine.css'

const DbEngine = () => {
    return(
        <section className="dbengine_section">
            <div className="dbengine_container">
                <div className="dbengine_text">
                    <h2>AgensSQL DB Engine</h2>
                    <h3>Enhanced Data security</h3>
                    <br/>
                    <p>AgensSQL DB Engine </p>
                <div className="dbengine_cards">
                    <Card classname={"card_1"} text1={"user password policy reinforces login security"} text2={"excessive failed login attempts lock an account"} text3={"excessive failed login attempts lock an account"}></Card>
                    <Card classname={"card_2"} text1={"enhanced data security of user personal information"} text2={"resolve privacy issues in preparation for security audits"} text3={"encryption or masking with unidentifiable special characters"}></Card>
                    <Card classname={"card_3"} text1={"encryption or masking with unidentifiable special characters"} text2={"traces object accessed or DDL & DML statements executed by a user"} text3={"records all actions in logs"}></Card>

                </div>
                </div>
                </div>
        </section>


    )
}
export default DbEngine;