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
            "Games",
            [
                {
                    start_time: "2023-05-07T10:00:00.000Z",
                    end_time: "2023-05-07T10:30:00.000Z",
                    game_data: JSON.stringify({
                        map: "Forest",
                        mode: "Capture the Flag",
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    start_time: "2023-05-08T15:00:00.000Z",
                    end_time: "2023-05-08T15:30:00.000Z",
                    game_data: JSON.stringify({
                        map: "Desert",
                        mode: "Deathmatch",
                    }),
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
         * await queryInterface.bulkDelete('People', null, {});
         */ await queryInterface.bulkDelete("Games", null, {});
    },
};
