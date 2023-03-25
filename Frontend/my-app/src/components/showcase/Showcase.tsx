import React from "react";

import Button from "@mui/material/Button";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import "./Showcase.scss";

interface IShowcaseProps {
  site: string;
  brief_description: string;
  image_path: string;
  hidden?: boolean;

  onEdit?: () => void;
  onHide?: () => void;
  onRemove?: () => void;
}

const Showcase = (props: IShowcaseProps) => {
  const {
    site,
    brief_description,
    image_path,
    hidden,
    onEdit,
    onHide,
    onRemove,
  } = props;

  const handleShowcaseSiteButtonClick = () => {
    if (site) {
      if (site.includes("https://") || site.includes("http://")) {
        window.open(site, "_blank");
      } else {
        window.open("https://" + site, "_blank");
      }
    }
  };

  const buttonsMenuJSX = () => {
    return (
      <div className="buttons-menu">
        <div className="buttons-menu__container">
          {onEdit && (
            <Button
              className="buttons-menu__button"
              onClick={() => {
                onEdit();
              }}
            >
              <CreateRoundedIcon />
            </Button>
          )}

          {onHide && (
            <Button
              className="buttons-menu__button"
              onClick={() => {
                onHide();
              }}
            >
              {hidden ? (
                <VisibilityOffRoundedIcon />
              ) : (
                <VisibilityRoundedIcon />
              )}
            </Button>
          )}

          {onRemove && (
            <Button
              className="buttons-menu__button"
              onClick={() => {
                onRemove();
              }}
            >
              <DeleteOutlineRoundedIcon />
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="showcase__container">
      {buttonsMenuJSX()}
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
