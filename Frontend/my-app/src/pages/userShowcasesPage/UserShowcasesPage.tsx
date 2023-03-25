import React from "react";
import { useNavigate } from "react-router-dom";

import Showcase from "../../components/showcase/Showcase";
import EditShowcaseModal from "../../components/editShowcaseModal/EditShowcaseModal";
import {
  getUserShowcases,
  updateShowcase,
  hideShowcase,
  deleteShowcase,
} from "../../services/http/showcase";

import "./UserShowcasesPage.scss";

const UserShowcasesPage = () => {
  const navigate = useNavigate();

  const [showcases, setShowcases] = React.useState<any[]>([]);

  const [editId, setEditId] = React.useState(0);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [editShowcaseSite, setEditShowcaseSite] = React.useState("");
  const [editShowcaseBriefDescription, setEditShowcaseBriefDescription] =
    React.useState("");
  const [editShowcaseImage, setEditShowcaseImage] = React.useState("");

  const fetchShowcases = async () => {
    const response = await getUserShowcases();

    if (response) setShowcases(response.showcases);
  };

  React.useEffect(() => {
    fetchShowcases();
  }, []);

  const handleEditSubmit = async () => {
    await updateShowcase({
      showcaseId: editId,
      site: editShowcaseSite,
      briefDescription: editShowcaseBriefDescription,
      image: editShowcaseImage,
    });

    fetchShowcases();
  };

  const handleHide = async (showcaseId: number) => {
    await hideShowcase(showcaseId);

    fetchShowcases();
  };

  const handleDelete = async (showcaseId: number) => {
    await deleteShowcase(showcaseId);

    fetchShowcases();
  };

  return (
    <div className="user-showcase-page__container">
      {!editModalOpen && (
        <div className="container">
          <p className="showcase-grid-title">My showcases</p>
          <div className="showcase-grid-container">
            {showcases.map((item) => {
              return (
                <Showcase
                  key={item.id}
                  site={item.site}
                  brief_description={item.brief_description}
                  image_path={item.image_path}
                  hidden={item.hidden}
                  onEdit={() => {
                    setEditId(item.id);
                    setEditShowcaseSite(item.site);
                    setEditShowcaseBriefDescription(item.brief_description);
                    setEditShowcaseImage(item.image_path);
                    setEditModalOpen(true);
                  }}
                  onHide={() => {
                    handleHide(item.id);
                  }}
                  onRemove={() => {
                    handleDelete(item.id);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      <EditShowcaseModal
        site={editShowcaseSite}
        briefDescription={editShowcaseBriefDescription}
        image={editShowcaseImage}
        open={editModalOpen}
        handleClose={() => {
          setEditModalOpen(false);
        }}
        handleSubmit={handleEditSubmit}
        setSite={setEditShowcaseSite}
        setBriefDescription={setEditShowcaseBriefDescription}
        setImage={setEditShowcaseImage}
      />
    </div>
  );
};

export default UserShowcasesPage;
