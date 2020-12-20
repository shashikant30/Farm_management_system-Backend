module.exports = app => {
    const farmers = require("../controllers/farmer.controllers.js");
    app.get("/farmer", farmers.findAll);
    app.get("/farm", farmers.findA);
};