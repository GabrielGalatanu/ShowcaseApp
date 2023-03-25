import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import IconButton from "@mui/material/IconButton";

import Textfield from "../../components/textfield/Textfield";
import MultilineTextfield from "../../components/multilineTextfield/MultilineTextfield";
import ImageDropzone from "../../components/imageDropzone/ImageDropzone";

import "./EditShowcaseModal.scss";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "rgba(0, 0, 0, 0.5);",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IEditShowcaseModalProps {
  site: string;
  briefDescription: string;
  image: any;

  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;

  setSite: (site: string) => void;
  setBriefDescription: (briefDescription: string) => void;
  setImage: (image: any) => void;
}

const EditShowcaseModal = (props: IEditShowcaseModalProps) => {
  const {
    site,
    briefDescription,
    image,
    open,
    handleClose,
    handleSubmit,
    setSite,
    setBriefDescription,
    setImage,
  } = props;

  return (
    <div className="edit-showcase-modal__container">
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form
            className="edit-showcase-modal__form"
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit();
            }}
          >
            <div className="close-button">
              <IconButton onClick={handleClose} style={{ color: "white" }}>
                <CancelRoundedIcon />
              </IconButton>
            </div>

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

            {image && typeof image === "string" ? (
              <div className="edit-image-drop-zone__container">
                <CancelRoundedIcon
                  onClick={() => setImage(null)}
                  className="edit-image-drop-zone__remove-icon"
                />
                <img
                  className="edit-image-drop-zone__image"
                  src={process.env.REACT_APP_BACKEND_URL + image}
                  alt=""
                />
              </div>
            ) : (
              <ImageDropzone image={image} setImage={setImage} />
            )}

            <Button className="submit-button" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditShowcaseModal;
