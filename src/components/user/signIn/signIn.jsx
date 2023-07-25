import "./signIn.css";
import FormInput from "../formInput/formInput";
import { useEffect, useState } from "react";
import CustomButton from "../../resusable/button/custombutton";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
        navigate("/");
    }
    }, []);

  const handleSignIn = (event) => {
    event.preventDefault();

    // Check user credentials against local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      // Authenticate user and redirect to home page
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="signup_container">
      <form className="signup_form" onSubmit={handleSignIn}>
        <h2 className="signup_title"> Sign In</h2>
        <hr></hr>
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
        <CustomButton type="submit"> Sign In </CustomButton>
        {error && <p className="error_message">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
