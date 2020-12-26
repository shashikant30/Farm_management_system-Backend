module.exports = app => {
    const farmers = require("../controllers/farmer.controllers.js");
    app.get("/farmer/:x", farmers.findAll);
    app.get("/farm/:x", farmers.findA);
    app.get("/login/:username/:password", farmers.Login)
};