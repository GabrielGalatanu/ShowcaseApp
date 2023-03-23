"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Showcases",
      [
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description: "Lorem ipsum dolor sit amet",
          image_path: "/images/showcase1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
          image_path: "/images/showcase2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image_path: "/images/showcase3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          image_path: "/images/showcase4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image_path: "/images/showcase5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image_path: "/images/showcase1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image_path: "/images/showcase2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 100,
          site: "https://www.google.com",
          brief_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image_path: "/images/showcase3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Showcases", null, {});
  },
};
