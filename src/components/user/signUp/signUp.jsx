import { useState } from "react";
import FormInput from "../formInput/formInput";
import "./signUp.css";
import CustomButton from "../../resusable/button/custombutton";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isAuthenticated", "false");

    navigate("/signin");
  };

  return (
    <div className="signup_container">
      <form className="signup_form" onSubmit={handleSignUp}>
        <h2 className="signup_title"> Sign Up</h2>
        <hr></hr>
        <FormInput
          label="Name"
          type="text"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
