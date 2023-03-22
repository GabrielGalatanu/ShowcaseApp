import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page__container">
      <div className="container">
        <Button
          onClick={() => {
            navigate("/create-showcase");
          }}
        >
          Add
        </Button>

        <p className="showcase-grid-title">Showcase</p>

        {/* <img
          src="http://localhost:3002/images/184e482a7c5ea4bce42af630bb1f6d26.jpeg"
          alt="random"
        /> */}
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
