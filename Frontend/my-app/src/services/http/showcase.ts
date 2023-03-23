import { Showcase } from "../../types/showcase";

import authService from "../auth/auth";

const createNewShowcase = (data: Showcase) => {
  try {
    let formData = new FormData();
    formData.append("image", data.image);
    formData.append("site", data.site);
    formData.append("briefDescription", data.briefDescription);

    return fetch("http://localhost:3002/showcase/create", {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllShowcases = async () => {
  try {
    let data = await fetch("http://localhost:3002/showcase/getAll", {
      method: "GET",
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

export { createNewShowcase, getAllShowcases };
