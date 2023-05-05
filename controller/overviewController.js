const sequelize = require("../models").sequelize;
const User = require("../models").User;

exports.profileById = async (req, res) => {
    try {
        const { id } = req.params;
        let user = await User.findByPk(id);
        return res.status(200).send({
            user: user,
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message,
        });
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
