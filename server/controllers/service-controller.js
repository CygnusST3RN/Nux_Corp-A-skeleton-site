const Service = require("../models/service-model");


const services = async (req, res) => {
    try {
        const response = await Service.find();
        res.status(200).json({msg: response});
    } catch (error) {
        console.log("error occured in service page", error);
    }
}

module.exports = services;