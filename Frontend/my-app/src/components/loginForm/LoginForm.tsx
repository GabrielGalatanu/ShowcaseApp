import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Textfield from "../textfield/Textfield";
import { login } from "../../services/http/user";

import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLoginButton = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all fields");
      return;
    }

    setErrorMessage("");

    let response = await login(email, password);

    if (response) {
      navigate("/");
    }
  };

  const handleRegisterButton = () => navigate("/register");

  return (
    <div className="login-form__container">
      <p className="login-text">Login</p>
      <div className="email-and-password-container">
        <Textfield
          inputProps={{ "data-cy": "email-input" }}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textfield
          inputProps={{ "data-cy": "password-input" }}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <Button
        data-cy="login-button"
        variant="contained"
        className="login-botton"
        onClick={handleLoginButton}
      >
        Login
      </Button>

      <p className="register-text" onClick={handleRegisterButton}>
        Don't have an account?
      </p>
    </div>
  );
};

export default LoginForm;
