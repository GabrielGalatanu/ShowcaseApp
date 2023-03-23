import React from "react";

import Button from "@mui/material/Button";

import "./Showcase.scss";

interface IShowcaseProps {
  site: string;
  brief_description: string;
  image_path: string;
}

const Showcase = (props: IShowcaseProps) => {
  const { site, brief_description, image_path } = props;

  const handleShowcaseSiteButtonClick = () => {
    if (site) {
      if (site.includes("https://") || site.includes("http://")) {
        window.open(site, "_blank");
      } else {
        window.open("https://" + site, "_blank");
      }
    }
  };

  return (
    <div className="showcase__container">
      <div className="content-container">
        <img
          className="image-showcase"
          src={process.env.REACT_APP_BACKEND_URL + image_path}
          alt="random"
        />

        <div className="brief-description-container">
          <p className="brief-description-text">{brief_description}</p>
        </div>
      </div>

      <Button className="site-button" onClick={handleShowcaseSiteButtonClick}>
        {site}
      </Button>
    </div>
  );
};

export default Showcase;
