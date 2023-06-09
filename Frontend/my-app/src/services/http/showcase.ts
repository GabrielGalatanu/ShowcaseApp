import { Showcase } from "../../types/showcase";

import authService from "../auth/auth";

const createNewShowcase = (data: Showcase) => {
  try {
    let user = authService.getCurrentUser();

    let formData = new FormData();
    formData.append("image", data.image);
    formData.append("site", data.site);
    formData.append("briefDescription", data.briefDescription);

    return fetch("http://localhost:3002/showcase/create", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + user.accessToken,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
};

const getAllShowcases = async (page: number, pageSize: number) => {
  try {
    let data = await fetch("http://localhost:3002/showcase/getAll", {
      method: "GET",
      headers: {
        page: page.toString(),
        page_size: pageSize.toString(),
      },
    });

    if (data.status === 200) {
      let dataJson = await data.json();

      return {
        showcases: dataJson.showcases,
        total_pages: dataJson.total_pages,
      };
    }

    return { showcases: [] };
  } catch (error) {
    console.log(error);
  }
};

const getUserShowcases = async () => {
  try {
    let user = authService.getCurrentUser();

    let data = await fetch("http://localhost:3002/showcase/getUserShowcases", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.accessToken,
      },
    });

    if (data.status === 200) {
      let dataJson = await data.json();

      return { showcases: dataJson };
    }

    return { showcases: [] };
  } catch (error) {
    console.log(error);
  }
};

const updateShowcase = (data: Showcase) => {
  try {
    let user = authService.getCurrentUser();

    let formData = new FormData();
    if (data.showcaseId)
      formData.append("showcaseId", data.showcaseId.toString());
    formData.append("image", data.image);
    formData.append("site", data.site);
    formData.append("briefDescription", data.briefDescription);

    return fetch("http://localhost:3002/showcase/update", {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: "Bearer " + user.accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const hideShowcase = (showcaseId: number) => {
  try {
    let user = authService.getCurrentUser();

    return fetch(
      `http://localhost:3002/showcase/hide?showcaseId=${showcaseId}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteShowcase = (showcaseId: number) => {
  try {
    let user = authService.getCurrentUser();

    return fetch(
      `http://localhost:3002/showcase/delete?showcaseId=${showcaseId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export {
  createNewShowcase,
  getAllShowcases,
  getUserShowcases,
  updateShowcase,
  hideShowcase,
  deleteShowcase,
};
