'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchPlayers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MatchPlayers.belongsTo(models.Games, { foreignKey: 'game_id', as: 'game' });
      MatchPlayers.belongsTo(models.Players, { foreignKey: 'player_id', as: 'player' });
    }
  }
  MatchPlayers.init({
    game_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    role: DataTypes.STRING,
    win: DataTypes.BOOLEAN,
    coin_collected: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MatchPlayers',
  });
  return MatchPlayers;
};
