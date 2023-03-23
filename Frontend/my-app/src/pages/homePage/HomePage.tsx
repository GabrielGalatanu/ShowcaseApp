import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Showcase from "../../components/showcase/Showcase";

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
        <Button
          onClick={() => {
            navigate("/create-showcase");
          }}
        >
          Add
        </Button>

        <p className="showcase-grid-title">Showcase</p>

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

        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
