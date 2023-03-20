import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Textfield from "../textfield/Textfield";

import "./RegisterForm.scss";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleBackToLoginButton = () => navigate("/login");

  return (
    <div className="register-form__container">
      <p className="register-text-title">Register</p>
      <div className="email-and-password-container">
        <Textfield />

        <Textfield />

        <Textfield />
      </div>

      <Button variant="contained" className="register-botton">
        Register
      </Button>

      <p className="register-text" onClick={handleBackToLoginButton}>
        Back to Login
      </p>
    </div>
  );
};

export default RegisterForm;
