const { User } = require("../models");

const isAdmin = async (req, res, next) => {
  try {
    if (req.roleId !== 1) {
        return res.send("You don't have permissions")
    }
    next();
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = isAdmin;
