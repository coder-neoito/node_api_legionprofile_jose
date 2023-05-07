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
            "MatchPlayers",
            [
                {
                    game_id: 1,
                    player_id: 1,
                    role: "Assault",
                    win: true,
                    coin_collected: 100,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    game_id: 1,
                    player_id: 2,
                    role: "Support",
                    win: false,
                    coin_collected: 50,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    game_id: 2,
                    player_id: 1,
                    role: "Sniper",
                    win: true,
                    coin_collected: 75,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    game_id: 2,
                    player_id: 2,
                    role: "Tank",
                    win: false,
                    coin_collected: 25,
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
        await queryInterface.bulkDelete("MatchPlayers", null, {});
    },
};
