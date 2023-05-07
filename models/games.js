'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Games.hasMany(models.MatchPlayers, { foreignKey: 'game_id', as: 'match_players' });
    }
  }
  Games.init({
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    game_data: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};
