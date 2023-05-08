const sequelize = require("../models").sequelize;
const Players = require("../models").Players;
const MatchPlayers = require("../models").MatchPlayers;
const Games = require("../models").Games;

exports.stats = async (req, res) => {
    console.log("sequelize", sequelize.Sequelize.literal);
    try {
        const playerId = req.params.id;
        const opponents = await Players.findAll({
            attributes: ["id", "name", "profile_pic", "createdAt", "updatedAt"],
            include: {
                model: MatchPlayers,
                as: "match_players",
                attributes: ["id", "role", "win", "coin_collected"],
                include: {
                    model: Players,
                    as: "player",
                    attributes: ["id", "name", "profile_pic"],
                },
                where: {
                    game_id: {
                        [sequelize.Sequelize.Op.in]: sequelize.literal(`(SELECT game_id FROM "MatchPlayers" WHERE player_id = ${playerId})`),
                    },
                    player_id: {
                        [sequelize.Sequelize.Op.ne]: playerId,
                    },
                },
            },
            where: {
                id: {
                    [sequelize.Sequelize.Op.ne]: playerId,
                },
            },
        });

        console.log("opponents", opponents);
        const response = opponents?.map((opponent) => {
            const stats = {
                total_matches: opponent.match_players.length,
                wins: opponent.match_players.filter((mp) => mp.win).length,
                losses: opponent.match_players.filter((mp) => !mp.win).length,
                average_coins_collected: opponent.match_players.reduce((total, mp) => total + mp.coins_collected, 0),
            };

            return {
                id: opponent.id,
                name: opponent.name,
                profile_pic: opponent.profile_pic,
                stats,
            };
        });

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
exports.matchHistory = async (req, res) => {
    try {
        const playerId = req.params.id;
        const games = await Games.findAll({
            include: [
                {
                    model: MatchPlayers,
                    as: "match_players",
                    where: { player_id: playerId },
                    include: [
                        {
                            model: Players,
                            as: "player",
                            attributes: ["id", "name", "profile_pic"],
                        },
                        {
                            model: Games,
                            as: "game",
                            attributes: ["id", "start_time", "end_time", "game_data"],
                        },
                    ],
                    attributes: ["id", "role", "win", "coin_collected", "rating", "player_id"],
                },
            ],
            order: [["start_time", "DESC"]],
        });
        console.log("games", JSON.stringify(games, null, 4));
        const formattedGames = games.map((game) => {
            const players = game.match_players.map((matchPlayer) => ({
                id: matchPlayer.player.id,
                name: matchPlayer.player.name,
                profile_pic: matchPlayer.player.profile_pic,
                won: playerId === matchPlayer.player_id ? matchPlayer.win : !matchPlayer.win,
                role: matchPlayer.role,
                coin_collected: matchPlayer.coin_collected,
            }));

            const playerWon = players.find((p) => p.won === true);
            const opponent = players.find((p) => p.id !== playerId);

            return {
                id: game.id,
                start_time: game.start_time,
                end_time: game.end_time,
                player_won: playerWon,
                opponent: opponent,
                players: players,
                game_data: game.game_data,
            };
        });

        res.json(formattedGames);
    } catch (e) {
        console.log("error", e);
        res.status(500).send("Internal Server Error");
    }
};
exports.profileById = async (req, res) => {
    try {
        const playerId = req?.params?.id;
        if (!playerId) {
            throw new Error("Id not found");
        }
        const player = await Players.findByPk(playerId, {
            attributes: ["id", "name", "profile_pic"],
        });

        const currentSessionStats = await MatchPlayers.findAll({
            where: {
                player_id: playerId,
                game_id: null,
            },
            attributes: [
                [sequelize.fn("COUNT", sequelize.col("win")), "wins"],
                [sequelize.fn("COUNT", sequelize.col("id")), "total_matches"],
                [sequelize.fn("AVG", sequelize.cast(sequelize.col("coin_collected"), "INTEGER")), "average_coin_collected"],
            ],
        });

        const peakStats = await MatchPlayers.findAll({
            where: {
                player_id: playerId,
            },
            attributes: [[sequelize.fn("MAX", sequelize.col("rating")), "peak_rating"]],
        });

        res.json({
            player,
            currentSessionStats: currentSessionStats[0],
            peakStats: peakStats[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.search = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            throw new Error("Name required");
        }
        let user = await User.findByPk(id, { where: { name: name } });
        return res.status(200).send({
            user: user,
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message,
        });
    }
};
