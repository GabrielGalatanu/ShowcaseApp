import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import Showcase from "../../components/showcase/Showcase";
import AuthService from "../../services/auth/auth";
import { getAllShowcases } from "../../services/http/showcase";

import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const [showcases, setShowcases] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await getAllShowcases();

      if (response) setShowcases(response.showcases);
    })();
  }, []);

  return (
    <div className="home-page__container">
      <div className="container">
        <div className="header-menu">
          <Button
            className="menu-button"
            onClick={() => {
              AuthService.logout();

              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>

        <h1 className="showcase-grid-title">Showcase</h1>

        <div className="add-and-view-buttons">
          <Button
            className="menu-button"
            onClick={() => {
              navigate("/create-showcase");
            }}
          >
            Add
          </Button>

          <Button
            className="menu-button"
            onClick={() => {
              navigate("/user-showcases");
            }}
          >
            My showcases
          </Button>
        </div>

        <div className="showcase-grid-container">
          {showcases.map((item) => {
            return (
              <Showcase
                key={item.id}
                site={item.site}
                brief_description={item.brief_description}
                image_path={item.image_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
