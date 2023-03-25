import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import Textfield from "../../components/textfield/Textfield";
import MultilineTextfield from "../../components/multilineTextfield/MultilineTextfield";
import ImageDropzone from "../../components/imageDropzone/ImageDropzone";
import { createNewShowcase } from "../../services/http/showcase";

import "./CreateShowcasePage.scss";

const CreateShowcasePage = () => {
  const navigate = useNavigate();

  const [site, setSite] = React.useState("");
  const [briefDescription, setBriefDescription] = React.useState("");
  const [image, setImage] = React.useState(null);

  const handleSubmit = async () => {
    await createNewShowcase({
      site,
      briefDescription,
      image,
    });
  };

  return (
    <div className="create-showcase-page__container">
      <div className="container">
        <div className="header-menu">
          <Button
            className="menu-button"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Button>
        </div>

        <h1 className="title">Create Showcase Page</h1>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit();
          }}
        >
          <Textfield
            label="Site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />

          <MultilineTextfield
            label="Brief Description"
            rows={4}
            value={briefDescription}
            onChange={(e) => setBriefDescription(e.target.value)}
          />

          <ImageDropzone image={image} setImage={setImage} />

          <Button className="menu-button" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateShowcasePage;
