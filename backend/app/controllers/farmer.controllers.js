const Farmer = require("../models/farmer.model.js");
  exports.Login = (req, res) => {
    Farmer.login(req.params.username,req.params.password, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
  exports.findFarmer = (req, res) => {
    Farmer.getFarmer(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Farmers information."
        });
      else res.send(data);
    });
  };
  exports.findFarm = (req, res) => {
    Farmer.getFarm(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Farm information."
        });
      else res.send(data);
    });
  };
  exports.findCrop = (req, res) => {
    Farmer.getCrop(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Crops information."
        });
      else res.send(data);
    });
  };
  exports.findWarehouse = (req, res) => {
    Farmer.getWarehouse(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Warehouse information."
        });
      else res.send(data);
    });
  };
  exports.findCropmarket = (req, res) => {
    Farmer.getCropmarket(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Crop market information."
        });
      else res.send(data);
    });
  };
  exports.findlabours = (req, res) => {
    Farmer.getlabours(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Labourers information."
        });
      else res.send(data);
    });
  };
  exports.findPesticides = (req, res) => {
    Farmer.getPesticides(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
    });
  };
  exports.findFertilizers = (req, res) => {
    Farmer.getFertilizers(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Fertilizers information."
        });
      else res.send(data);
    });
  };
  exports.findSeeds = (req, res) => {
    Farmer.getSeeds(req.params.f_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Seeds information."
        });
      else res.send(data);
    });
  };
  
  

  exports.addFarm = (req, res) => {
    Farmer.addfarm(req.params.farm_id,req.params.f_id,req.params.farm_area,req.params.farm_location,req.params.farm_irrigation_src, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateFarm = (req, res) => {
    Farmer.updatefarm(req.params.farm_id,req.params.f_id,req.params.farm_area,req.params.farm_location,req.params.farm_irrigation_src, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteFarm = (req, res) => {
    Farmer.deletefarm(req.params.farm_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.addCrop = (req, res) => {
    Farmer.addcrop(req.params.crop_id,req.params.crop_name,req.params.crop_quantity,req.params.farm_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateCrop = (req, res) => {
    Farmer.updatecrop(req.params.crop_id,req.params.crop_name,req.params.crop_quantity,req.params.farm_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteCrop = (req, res) => {
    Farmer.deletecrop(req.params.crop_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.addMarket = (req, res) => {
    Farmer.addmarket(req.params.crop_market_id,req.params.crop_id,req.params.crop_category,req.params.market_name,req.params.market_district,req.params.market_unit,req.params.crop_quantity,req.params.crop_price,req.params.date_of_sold,req.params.crop_name,req.params.warehouse_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateMarket = (req, res) => {
    Farmer.updatemarket(req.params.crop_market_id,req.params.crop_id,req.params.crop_category,req.params.market_name,req.params.market_district,req.params.market_unit,req.params.crop_quantity,req.params.crop_price,req.params.date_of_sold,req.params.crop_name,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteMarket = (req, res) => {
    Farmer.deletemarket(req.params.crop_market_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.addLabour = (req, res) => {
    Farmer.addlabour(req.params.labour_id,req.params.l_fname,req.params.l_mname,req.params.l_lname,req.params.l_address,req.params.l_phone,req.params.l_telephone,req.params.work,req.params.working_hours,req.params.salary,req.params.l_city,req.params.crop_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateLabour = (req, res) => {
    Farmer.updatelabour(req.params.labour_id,req.params.l_fname,req.params.l_mname,req.params.l_lname,req.params.l_address,req.params.l_phone,req.params.l_telephone,req.params.work,req.params.working_hours,req.params.salary,req.params.l_city,req.params.crop_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteLabour = (req, res) => {
    Farmer.deletelabour(req.params.labour_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.addWarehouse = (req, res) => {
    Farmer.addwarehouse(req.params.warehouse_id,req.params.crop_name,req.params.crop_stored_quantity,req.params.total_capacity,req.params.crop_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateWarehouse = (req, res) => {
    Farmer.updatewarehouse(req.params.warehouse_id,req.params.crop_name,req.params.crop_stored_quantity,req.params.total_capacity,req.params.crop_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteWarehouse = (req, res) => {
    Farmer.deletewarehouse(req.params.warehouse_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.addPesticide = (req, res) => {
    Farmer.addpesticide(req.params.pesticide_id,req.params.pesticide_name,req.params.pesticide_rate,req.params.pesticide_quantity,req.params.company_name,req.params.formulation,req.params.fertilizer_id,req.params.seed_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updatePesticide = (req, res) => {
    Farmer.updatepesticide(req.params.pesticide_id,req.params.pesticide_name,req.params.pesticide_rate,req.params.pesticide_quantity,req.params.company_name,req.params.formulation,req.params.fertilizer_id,req.params.seed_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deletePesticide = (req, res) => {
    Farmer.deletepesticide(req.params.pesticide_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.addFertilizer = (req, res) => {
    Farmer.addfertilizer(req.params.pesticide_id,req.params.fertilizer_name,req.params.fertilizer_rate,req.params.fertilizer_quantity,req.params.crop_id,req.params.company_name,req.params.formulation,req.params.fertilizer_id,req.params.seed_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateFertilizer = (req, res) => {
    Farmer.updatefertilizer(req.params.pesticide_id,req.params.fertilizer_name,req.params.fertilizer_rate,req.params.fertilizer_quantity,req.params.crop_id,req.params.company_name,req.params.formulation,req.params.fertilizer_id,req.params.seed_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteFertilizer = (req, res) => {
    Farmer.deletefertilizer(req.params.fertilizer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };


  exports.addSeed = (req, res) => {
    Farmer.addseed(req.params.seed_id,req.params.seed_name,req.params.seed_type,req.params.seed_category,req.params.seed_rate,req.params.seed_quantity,req.params.company_name,req.params.pesticide_id,req.params.fertilizer_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.updateSeed = (req, res) => {
    Farmer.updateseed(req.params.seed_id,req.params.seed_name,req.params.seed_type,req.params.seed_category,req.params.seed_rate,req.params.seed_quantity,req.params.company_name,req.params.pesticide_id,req.params.fertilizer_id,req.params.farmer_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
      else res.send(data);
      });
  };
  exports.deleteSeed = (req, res) => {
    Farmer.deleteseed(req.params.seed_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pesticides information."
        });
        else res.send(data);
      });
  };



  exports.profitLoss = (req, res) => {
    Farmer.profitloss(req.params.farmer_id, req.params.crop_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Farmers information."
        });
      else res.send(data);
    });
  };
  exports.cropBalance = (req, res) => {
    Farmer.cropbalance(req.params.crop_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Farmers information."
        });
      else res.send(data);
    });
  };