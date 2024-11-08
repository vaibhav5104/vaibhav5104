const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();

    // Check if the response is empty
    if (response.length === 0) {
      return res.status(404).json({ msg: "No services found" });
    }

    // If services are found
    res.status(200).json({ msg: "Services fetched successfully", data: response });
  } catch (error) {
    console.error(`Services error: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = services;
