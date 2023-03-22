import React from "react";

import Textfield from "../../components/textfield/Textfield";
import MultilineTextfield from "../../components/multilineTextfield/MultilineTextfield";
import ImageDropzone from "../../components/imageDropzone/ImageDropzone";
import { createNewShowcase } from "../../services/http/showcase";

import "./CreateShowcasePage.scss";

const CreateShowcasePage = () => {
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

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateShowcasePage;
