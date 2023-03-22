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

  const handleLoginButton = async () => {
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
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textfield
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
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
