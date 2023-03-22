import { Showcase } from "../../types/showcase";

import authService from "../auth/auth";

const createNewShowcase = (data: Showcase) => {
  console.log(data.image);

  let formData = new FormData();
  formData.append("image", data.image);
  formData.append("site", data.site);
  formData.append("briefDescription", data.briefDescription);

  return fetch("http://localhost:3002/showcase/create", {
    method: "POST",
    body: formData,
  });

  //   return fetch("http://localhost:3002/showcase/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",

  //       ...authService.authHeader(),
  //     },
  //     body: JSON.stringify(data),
  //   });
};

export { createNewShowcase };
