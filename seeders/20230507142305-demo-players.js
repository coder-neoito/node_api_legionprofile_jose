"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Players",
            [
                {
                    name: "John",
                    profile_pic: "https://example.com/john.jpg",

                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Sarah",
                    profile_pic: "https://example.com/sarah.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         *
         */
        await queryInterface.bulkDelete('Players', null, {});
    },
};
