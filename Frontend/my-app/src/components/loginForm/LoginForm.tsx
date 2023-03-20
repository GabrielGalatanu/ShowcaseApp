import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Textfield from "../textfield/Textfield";

import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleRegisterButton = () => navigate("/register");

  return (
    <div className="login-form__container">
      <p className="login-text">Login</p>
      <div className="email-and-password-container">
        <Textfield />

        <Textfield />
      </div>

      <Button variant="contained" className="login-botton">
        Login
      </Button>

      <p className="register-text" onClick={handleRegisterButton}>
        Don't have an account?
      </p>
    </div>
  );
};

export default LoginForm;
