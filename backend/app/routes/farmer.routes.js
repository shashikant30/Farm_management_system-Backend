module.exports = app => {
    const farmers = require("../controllers/farmer.controllers.js");
    app.get("/login/:username/:password", farmers.Login);
    app.get("/farmer/:f_id", farmers.findFarmer);
    app.get("/farm_info/:f_id", farmers.findFarm);
    app.get("/Crop_info/:f_id", farmers.findCrop);
    app.get("/Warehouse/:f_id", farmers.findWarehouse);
    app.get("/Cropmarket/:f_id", farmers.findCropmarket);
    app.get("/labourers/:f_id", farmers.findlabourers);
    app.get("/Pesticides/:f_id", farmers.findPesticides);
    app.get("/Fertilizers/:f_id", farmers.findFertilizers);
    app.get("/Seeds/:f_id", farmers.findSeeds);
};