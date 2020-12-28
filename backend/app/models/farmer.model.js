const sql = require("./db.js");
const Farmer = function(farmer) {
    this.farmer_id=farmer.farmer_id;
    this.farmer_fname = farmer.farmer_fname;
    this.farmer_mname = farmer.farmer_mname;
    this.farmer_lname = farmer.farmer_lname;
    this.address = farmer.address;
    this.contact = farmer.contact;
    this.farm_id = farmer.farm_id;
    this.area = farmer.area;
    this.location = farmer.location;
    this.irrigation_src = farmer.irrigation_src;
    this.f_id=farmer.f_id;
  };
   Farmer.login = (username, password, result)=> {
    sql.query(`SELECT F_id FROM farmer WHERE F_id="${username}" AND F_password="${password}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("farm: ", res);
      result(null, res);
    });
  };
  Farmer.getFarmer = (f_id,result) => {
    sql.query(`SELECT * FROM farmer WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

  
  Farmer.getFarm = (f_id,result) => {
    sql.query(`SELECT * FROM farm NATURAL JOIN farm_info WHERE f_id = ${f_id} `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

 Farmer.getCrop = (f_id,result) => {
    sql.query(`SELECT * FROM Produces NATURAL JOIN Crop_allocation  WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  
Farmer.getWarehouse = (f_id,result) => {
    sql.query(`SELECT * FROM Stored_in NATURAL JOIN Warehouse NATURAL JOIN Produces WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

Farmer.getCropmarket = (f_id,result) => {
    sql.query(`SELECT * FROM Solds_in NATURAL JOIN Crop_market WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

Farmer.getlabourers = (f_id,result) => {
    sql.query(`SELECT * FROM labourers NATURAL JOIN labourers_info WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
Farmer.getPesticides = (f_id,result) => {
    sql.query(`SELECT * FROM maintain NATURAL JOIN Pesticides_info WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

Farmer.getFertilizers = (f_id,result) => {
    sql.query(`SELECT * FROM maintain NATURAL JOIN Fertilizers_info WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
Farmer.getSeeds = (f_id,result) => {
    sql.query(`SELECT * FROM maintain NATURAL JOIN Seeds_info WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
Farmer.getSeeds = (f_id,result) => {
    sql.query(`SELECT * FROM maintain NATURAL JOIN Seeds_info WHERE f_id = ${f_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

  module.exports = Farmer;