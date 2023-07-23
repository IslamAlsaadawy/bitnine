import { useState } from "react";
import FormInput from "../formInput/formInput";
import "./signUp.css";
import CustomButton from "../../resusable/button/custombutton";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return(
        <div className="signup_container">

            
                
                <form className="signup_form">
                <h2 className="signup_title"> Sign Up</h2>
                <hr></hr>
                    <FormInput label="Name" type="text" handleChange={e => setName(e.target.value)} />
                    <FormInput label="Email" type="email" handleChange={e => setEmail(e.target.value)} />
                    <FormInput label="Password" type="password" handleChange={e => setPassword(e.target.value)} />
                    <CustomButton> Test </CustomButton>

                </form>
            </div>
    )
}

export default SignUp;