import React from "react";
import { useNavigate } from "react-router-dom";

import Showcase from "../../components/showcase/Showcase";

import { getUserShowcases } from "../../services/http/showcase";

import "./UserShowcasesPage.scss";

const UserShowcasesPage = () => {
  const navigate = useNavigate();

  const [showcases, setShowcases] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await getUserShowcases();

      if (response) setShowcases(response.showcases);
    })();
  }, []);

  return (
    <div className="user-showcase-page__container">
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
                onEdit={() => {
                  console.log("abc");
                }}
                onHide={() => {
                  console.log("abc");
                }}
                onRemove={() => {
                  console.log("abc");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserShowcasesPage;
