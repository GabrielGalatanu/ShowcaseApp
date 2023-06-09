import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Textfield from "../textfield/Textfield";
import { register } from "../../services/http/user";

import "./RegisterForm.scss";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRegisterButton = async () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Please fill all fields");
      return;
    }

    setErrorMessage("");

    if (password !== confirmPassword) return;

    let response = await register(email, password);

    if (response.status === 200) navigate("/login");
  };

  const handleBackToLoginButton = () => navigate("/login");

  return (
    <div className="register-form__container">
      <p className="register-text-title">Register</p>
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

        <Textfield
          inputProps={{ "data-cy": "confirm-password-input" }}
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <Button
        data-cy="register-button"
        variant="contained"
        className="register-botton"
        onClick={handleRegisterButton}
      >
        Register
      </Button>

      <p className="register-text" onClick={handleBackToLoginButton}>
        Back to Login
      </p>
    </div>
  );
};

export default RegisterForm;
