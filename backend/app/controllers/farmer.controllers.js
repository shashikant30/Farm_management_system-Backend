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
  
  
  exports.findlabourers = (req, res) => {
    Farmer.getlabourers(req.params.f_id, (err, data) => {
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
    Farmer.updatefarm(req.params.a,req.params.b,req.params.c,req.params.d,req.params.e, (err, data) => {
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
      });
  };