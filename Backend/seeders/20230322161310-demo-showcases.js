"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Showcases",
      [
        {
          user_id: 1,
          site: "https://www.google.com",
          brief_description: "This is a test site",
          image_path: "/images/showcase1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          site: "https://www.google.com",
          brief_description: "This is a test site",
          image_path: "/images/showcase2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          site: "https://www.google.com",
          brief_description: "This is a test site",
          image_path: "/images/showcase3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          site: "https://www.google.com",
          brief_description: "This is a test site",
          image_path: "/images/showcase4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          site: "https://www.google.com",
          brief_description: "This is a test site",
          image_path: "/images/showcase5.jpg",
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
