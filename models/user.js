'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    country: DataTypes.STRING,
    playstyle: DataTypes.STRING,
    last_game_at: DataTypes.DATE,
    profile_pic: DataTypes.STRING,
    current_stats: DataTypes.JSONB,
    all_time_stats: DataTypes.JSONB,
    favorite_rolls: DataTypes.JSONB,
    favorite_openings: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
