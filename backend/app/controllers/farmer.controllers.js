const Farmer = require("../models/farmer.model.js");
exports.findAll = (req, res) => {
    Farmer.getAll(req.params.x, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
exports.findA = (req, res) => {
    Farmer.getA(req.params.x, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
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