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
            "Users",
            [
                {
                    name: "John",
                    current_stats: '{"wins": 10, "losses": 5}',
                    all_time_stats: '{"wins": 100, "losses": 50}',
                    favorite_rolls: '{"roll1": 5, "roll2": 6}',
                    favorite_openings: '{"opening1": "Sicilian Defense", "opening2": "Ruy Lopez"}',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    playstyle: "aggressive",
                    country: "USA",
                    tag_line: "Always learning!",
                    profile_pic: "https://example.com/profile_pic.png",
                    user_name: "johndoe",
                    last_game_at: new Date(),
                },
                {
                    name: "Doe",
                    current_stats: '{"wins": 10, "losses": 5}',
                    all_time_stats: '{"wins": 100, "losses": 50}',
                    favorite_rolls: '{"roll1": 5, "roll2": 6}',
                    favorite_openings: '{"opening1": "Sicilian Defense", "opening2": "Ruy Lopez"}',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    playstyle: "aggressive",
                    country: "USA",
                    tag_line: "Always learning!",
                    profile_pic: "https://example.com/profile_pic.png",
                    user_name: "johndoe",
                    last_game_at: new Date(),
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

     */
        await queryInterface.bulkDelete("Users", null, {});
    },
};
