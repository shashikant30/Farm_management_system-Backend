const sql = require("./db.js");
const Farmer = function(farmer) {};
  
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

  Farmer.addfarm = (farm_id,f_id,farm_area,farm_location,farm_irrigation_src,result) => {
    sql.query(`INSERT INTO farm VALUES(${f_id},${farm_id})`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
     // console.log("farmers: ", res);
     // result(null, res);
    });
    sql.query(`INSERT INTO farm_info VALUES(${farm_id},'${farm_area}','${farm_location}','${farm_irrigation_src}')`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

  Farmer.updatefarm = (a,b,c,d,e,result) => {
    sql.query(`UPDATE farm_info SET Farm_area='${c}',Farm_location='${d}',Farm_irrigation_source='${e}' WHERE Farm_id=${a}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };

  Farmer.deletefarm = (farmer_id,result) => {
    sql.query(`DELETE FROM farm_info WHERE Farm_id=${farmer_id}`, (err, res) => {
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