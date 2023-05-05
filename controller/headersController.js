const sequelize = require("../models").sequelize;
const Headers = require("../models").Headers;

exports.topHeader = async (req, res) => {
    try {
        let headers = await Headers.findAll();
        return res.status(200).send({
            headers: headers,
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message,
        });
    }
};
