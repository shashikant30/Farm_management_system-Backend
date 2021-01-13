module.exports = app => {
    const farmers = require("../controllers/farmer.controllers.js");
    app.get("/login/:username/:password", farmers.Login);
    app.get("/farmer/:f_id", farmers.findFarmer);
    app.get("/farm_info/:f_id", farmers.findFarm);
    app.get("/crop_info/:f_id", farmers.findCrop);
    app.get("/warehouse/:f_id", farmers.findWarehouse);
    app.get("/cropmarket/:f_id", farmers.findCropmarket);
    app.get("/labours/:f_id", farmers.findlabours);
    app.get("/pesticides/:f_id", farmers.findPesticides);
    app.get("/fertilizers/:f_id", farmers.findFertilizers);
    app.get("/seeds/:f_id", farmers.findSeeds);

    app.post("/farm_info/add/:farm_id/:f_id/:farm_area/:farm_location/:farm_irrigation_src", farmers.addFarm);
    app.post("/farm_info/update/:farm_id/:f_id/:farm_area/:farm_location/:farm_irrigation_src", farmers.updateFarm);
    app.delete("/farm_info/delete/:farm_id", farmers.deleteFarm);

    app.post("/crop_info/add/:crop_id/:crop_name/:crop_quantity/:farm_id/:farmer_id", farmers.addCrop);
    app.post("/crop_info/update/:crop_id/:crop_name/:crop_quantity/:farm_id/:farmer_id", farmers.updateCrop);
    app.delete("/crop_info/delete/:crop_id", farmers.deleteCrop);

    app.post("/cropmarket/add/:crop_market_id/:crop_id/:crop_category/:market_name/:market_district/:market_unit/:crop_quantity/:crop_price/:date_of_sold/:crop_name/:warehouse_id/:farmer_id", farmers.addMarket);
    app.post("/cropmarket/update/:crop_market_id/:crop_id/:crop_category/:market_name/:market_district/:market_unit/:crop_quantity/:crop_price/:date_of_sold/:crop_name/:farmer_id", farmers.updateMarket);
    app.delete("/cropmarket/delete/:crop_market_id", farmers.deleteMarket);

    app.post("/labours/add/:labour_id/:l_fname/:l_mname/:l_lname/:l_address/:l_phone/:l_telephone/:work/:working_hours/:salary/:l_city/:crop_id/:farmer_id", farmers.addLabour);
    app.post("/labours/update/:labour_id/:l_fname/:l_mname/:l_lname/:l_address/:l_phone/:l_telephone/:work/:working_hours/:salary/:l_city/:crop_id/:farmer_id", farmers.updateLabour);
    app.delete("/labours/delete/:labour_id", farmers.deleteLabour);

    app.post("/warehouse/add/:warehouse_id/:crop_name/:crop_stored_quantity/:total_capacity/:crop_id", farmers.addWarehouse);
    app.post("/warehouse/update/:warehouse_id/:crop_name/:crop_stored_quantity/:total_capacity/:crop_id", farmers.updateWarehouse);
    app.delete("/warehouse/delete/:warehouse_id", farmers.deleteWarehouse);

    app.post("/pesticides/add/:pesticide_id/:pesticide_name/:pesticide_rate/:pesticide_quantity/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id", farmers.addPesticide);
    app.post("/pesticides/update/:pesticide_id/:pesticide_name/:pesticide_rate/:pesticide_quantity/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id", farmers.updatePesticide);
    app.delete("/pesticides/delete/:pesticide_id", farmers.deletePesticide);

    app.post("/fertilizers/add/:pesticide_id/:fertilizer_name/:fertilizer_rate/:fertilizer_quantity/:crop_id/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id", farmers.addFertilizer);
    app.post("/fertilizers/update/:pesticide_id/:fertilizer_name/:fertilizer_rate/:fertilizer_quantity/:crop_id/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id", farmers.updateFertilizer);
    app.delete("/fertilizers/delete/:fertilizer_id", farmers.deleteFertilizer);

    app.post("/seeds/add/:seed_id/:seed_name/:seed_type/:seed_category/:seed_rate/:seed_quantity/:company_name/:pesticide_id/:fertilizer_id/:farmer_id", farmers.addSeed);
    app.post("/seeds/update/:seed_id/:seed_name/:seed_type/:seed_category/:seed_rate/:seed_quantity/:company_name/:pesticide_id/:fertilizer_id/:farmer_id", farmers.updateSeed);
    app.delete("/seeds/delete/:Seed_id", farmers.deleteSeed);



    app.get("/overview/profitLoss/:farmer_id/:crop_id", farmers.profitLoss);

};