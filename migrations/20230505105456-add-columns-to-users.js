'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.addColumn('Users', 'playstyle', {
      type: Sequelize.STRING,
      allowNull: true, // or false if you want the column to be non-null
    });
      await queryInterface.addColumn('Users', 'country', {
      type: Sequelize.STRING,
      allowNull: true, // or false if you want the column to be non-null
    });
      await queryInterface.addColumn('Users', 'tag_line', {
      type: Sequelize.STRING,
      allowNull: true, // or false if you want the column to be non-null
    });
      await queryInterface.addColumn('Users', 'profile_pic', {
      type: Sequelize.STRING,
      allowNull: true, // or false if you want the column to be non-null
    });
      await queryInterface.addColumn('Users', 'user_name', {
      type: Sequelize.STRING,
      allowNull: true, // or false if you want the column to be non-null
    });
      await queryInterface.addColumn('Users', 'last_game_at', {
      type: Sequelize.DATE,
      allowNull: true, // or false if you want the column to be non-null
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
          await queryInterface.removeColumn('Users', 'playstyle');
          await queryInterface.removeColumn('Users', 'country');
          await queryInterface.removeColumn('Users', 'tag_line');
          await queryInterface.removeColumn('Users', 'profile_pic');
          await queryInterface.removeColumn('Users', 'user_name');
          await queryInterface.removeColumn('Users', 'last_game_at');
  }
};
