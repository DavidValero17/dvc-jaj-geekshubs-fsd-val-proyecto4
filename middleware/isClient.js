const { Client } = require("../models");

const isClient = async (req, res, next) => {
  try {
    const client = await Client.findOne({
      where: { user_id: req.userId },
    });


    if (!client) {
      return res.status(500).json({
        success: true,
        message: "You don't have permissions.",
      });
    }

    req.clientId = client.id;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


module.exports = isClient;
