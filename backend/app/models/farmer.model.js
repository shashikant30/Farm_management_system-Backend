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
  Farmer.getAll = (x, result) => {
    sql.query(`SELECT * FROM farmer where farmer_id=${x}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.getA = result => {
    sql.query("SELECT * FROM farm JOIN farm_info ON farm.farm_id = farm_info.farm_id WHERE farmer_id=2", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("farm: ", res);
      result(null, res);
    });
  };
   Farmer.login = (username, password, result)=> {
    sql.query(`SELECT farmer_id FROM farmer WHERE farmer_fname="${username}" AND password="${password}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("farm: ", res);
      result(null, res);
    });
  };
  module.exports = Farmer;