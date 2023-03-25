import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Showcase from "../../components/showcase/Showcase";
import AuthService from "../../services/auth/auth";
import { getAllShowcases } from "../../services/http/showcase";

import "./HomePage.scss";

const MAX_SHOWCASES_PER_PAGE = 6;

const HomePage = () => {
  const navigate = useNavigate();

  const [showcases, setShowcases] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchShowcases = React.useCallback(async () => {
    const response = await getAllShowcases(page, MAX_SHOWCASES_PER_PAGE);

    if (!response) return;

    setShowcases(response.showcases);
    setTotalPages(response.total_pages);
  }, [page]);

  React.useEffect(() => {
    fetchShowcases();
  }, [fetchShowcases, page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value - 1);
    fetchShowcases();
  };

  return (
    <div className="home-page__container">
      <div className="container">
        <div className="header-menu">
          <Button
            data-cy="logout-button"
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
            data-cy="add-showcase-button"
            className="menu-button"
            onClick={() => {
              navigate("/create-showcase");
            }}
          >
            Add
          </Button>

          <Button
            data-cy="view-showcase-button"
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

        {totalPages > 1 && (
          <Stack spacing={2} sx={{ marginBottom: "30px" }}>
            <Pagination
              data-cy="pagination"
              shape="rounded"
              count={totalPages}
              variant="outlined"
              onChange={handlePageChange}
            />
          </Stack>
        )}
      </div>
    </div>
  );
};

export default HomePage;
