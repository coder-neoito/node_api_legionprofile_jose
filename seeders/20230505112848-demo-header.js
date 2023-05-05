"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert(
            "Headers",
            [
                {
                    title: "Overview",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Game Stats",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    title: "Trophies",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Collections",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Equips",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Match history",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Monumnets",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Masteries",
                    createdAt: new Date(),
                    updatedAt: new Date(),
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
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
