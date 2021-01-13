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
  Farmer.getlabours = (f_id,result) => {
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
    sql.query(`INSERT INTO farm_info VALUES(null,'${farm_area}','${farm_location}','${farm_irrigation_src}');INSERT INTO farm VALUES(${f_id},(SELECT LAST_INSERT_ID()))`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.updatefarm = (farm_id,f_id,farm_area,farm_location,farm_irrigation_src,result) => {
    sql.query(`UPDATE farm_info SET Farm_area='${farm_area}',Farm_location='${farm_location}',Farm_irrigation_source='${farm_irrigation_src}' WHERE Farm_id=${farm_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletefarm = (farm_id,result) => {
    sql.query(`delete from farm_info where Farm_id=${farm_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addcrop = (crop_id,crop_name,crop_quantity,farm_id,farmer_id,result) => {
    sql.query(`INSERT INTO crop_allocation VALUES(${crop_id},'${crop_name}','${crop_quantity}',${farm_id});INSERT INTO produces VALUES(${farmer_id},(SELECT LAST_INSERT_ID()))`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.updatecrop = (crop_id,crop_name,crop_quantity,farm_id,farmer_id,result) => {
    sql.query(`UPDATE crop_allocation SET Crop_name='${crop_name}',crop_quantity='${crop_quantity}',Farm_id=${farm_id} WHERE Crop_id=${crop_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletecrop = (crop_id,result) => {
    sql.query(`DELETE FROM crop_allocation WHERE Crop_id=${crop_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addmarket = (crop_market_id, crop_id, crop_category, market_name, market_district, market_unit, crop_quantity, crop_price, date_of_sold, crop_name, warehouse_id, farmer_id, result) => {
    sql.query(`INSERT INTO crop_market VALUES(${crop_market_id},${crop_id},'${crop_category}','${market_name}','${market_district}','${market_unit}','${crop_quantity}',${crop_price},'${date_of_sold}','${crop_name}');INSERT INTO solds_in VALUES(${farmer_id},(SELECT LAST_INSERT_ID()),${warehouse_id})`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  }; 
  Farmer.updatemarket = (crop_market_id, crop_id, crop_category, market_name, market_district, market_unit, crop_quantity, crop_price, date_of_sold, crop_name,farmer_id, result) => {
    sql.query(`UPDATE crop_market SET Crop_id=${crop_id},Crop_category='${crop_category}',Market_name='${market_name}',Market_district='${market_district}',Market_unit='${market_unit}',Crop_quantity='${crop_quantity}',Crop_price=${crop_price},Date_of_sold='${date_of_sold}',crop_name='${crop_name}' WHERE Crop_market_id=${crop_market_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletemarket = (crop_market_id,result) => {
    sql.query(`DELETE FROM crop_market WHERE Crop_market_id=${crop_market_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addlabour = (labour_id,l_fname,l_mname,l_lname,l_address,l_phone,l_telephone,work,working_hours,salary,l_city,crop_id,farmer_id, result) => {
    sql.query(`INSERT INTO labourers_info VALUES(${labour_id},'${l_fname}','${l_lname}','${l_mname}','${l_address}','${l_phone}','${l_telephone}','${work}',${working_hours},${salary},'${l_city}',${crop_id});INSERT INTO labourers VALUES(${farmer_id},(SELECT LAST_INSERT_ID()))`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.updatelabour = (labour_id,l_fname,l_mname,l_lname,l_address,l_phone,l_telephone,work,working_hours,salary,l_city,crop_id,farmer_id, result) => {
    sql.query(`UPDATE labourers_info SET L_fname='${l_fname}',L_lname='${l_lname}',L_mname='${l_mname}',L_address='${l_address}',L_phoneNo='${l_phone}',L_telephoneNo='${l_telephone}',Work='${work}',Working_hours=${working_hours},Salary=${salary},L_city='${l_city}',CropId=${crop_id} WHERE L_id=${labour_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletelabour = (labour_id,result) => {
    sql.query(`DELETE FROM labourers_info WHERE L_id=${labour_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addwarehouse = (warehouse_id,crop_name,crop_stored_quantity,total_capacity,crop_id, result) => {
    sql.query(`INSERT INTO warehouse VALUES(${warehouse_id},'${crop_name}','${crop_stored_quantity}','${total_capacity}');INSERT INTO stored_in VALUES(${crop_id},(SELECT LAST_INSERT_ID()))`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.updatewarehouse = (warehouse_id,crop_name,crop_stored_quantity,total_capacity,crop_id, result) => {
    sql.query(`UPDATE warehouse SET Crop_name='${crop_name}',Crop_stored_quantity='${crop_stored_quantity}',Total_capacity='${total_capacity}' WHERE Warehouse_id=${warehouse_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletewarehouse = (warehouse_id,result) => {
    sql.query(`DELETE FROM warehouse WHERE Warehouse_id=${warehouse_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addpesticide = (pesticide_id,pesticide_name,pesticide_rate,pesticide_quantity,company_name,formulation,fertilizer_id,seed_id,farmer_id, result) => {
    sql.query(`INSERT INTO Pesticides_info VALUES(${pesticide_id},'${pesticide_name}',${pesticide_rate},'${pesticide_quantity}','${company_name}','${formulation}');INSERT INTO maintain VALUES(${farmer_id},(SELECT LAST_INSERT_ID()),${fertilizer_id},${seed_id})`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.updatepesticide = (pesticide_id,pesticide_name,pesticide_rate,pesticide_quantity,company_name,formulation,fertilizer_id,seed_id,farmer_id, result) => {
    sql.query(`UPDATE Pesticides_info SET Pesticide_name='${pesticide_name}',Pesticide_rate=${pesticide_rate},Pesticide_quantity='${pesticide_quantity}',Company_name='${company_name}',Formulation='${formulation}' WHERE Pesticide_id=${pesticide_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletepesticide = (pesticide_id,result) => {
    sql.query(`DELETE FROM Pesticides_info WHERE Pesticide_id=${pesticide_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addfertilizer = (pesticide_id,fertilizer_name,fertilizer_rate,fertilizer_quantity,crop_id,company_name,formulation,fertilizer_id,seed_id,farmer_id, result) => {
    sql.query(`INSERT INTO Fertilizers_info VALUES(${fertilizer_id},'${fertilizer_name}',${fertilizer_rate},'${fertilizer_quantity}',${crop_id},'${company_name}','${formulation}');INSERT INTO maintain VALUES(${farmer_id},${pesticide_id},(SELECT LAST_INSERT_ID()),${seed_id})`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.updatefertilizer = (pesticide_id,fertilizer_name,fertilizer_rate,fertilizer_quantity,crop_id,company_name,formulation,fertilizer_id,seed_id,farmer_id, result) => {
    sql.query(`UPDATE Fertilizers_info SET Fertilizer_name='${fertilizer_name}',Fertilizer_rate=${fertilizer_rate},Fertilizer_quantity='${fertilizer_quantity}',Crop_id=${crop_id},Company_name='${company_name}',Formulation='${formulation}' WHERE Fertilizer_id=${fertilizer_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };
  Farmer.deletefertilizer = (fertilizer_id,result) => {
    sql.query(`DELETE FROM Fertilizers_info WHERE Fertilizer_id=${fertilizer_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res);
    });
  };


  Farmer.addseed = (seed_id,seed_name,seed_type,seed_category,seed_rate,seed_quantity,company_name,pesticide_id,fertilizer_id,farmer_id, result) => {
     sql.query(`INSERT INTO Seeds_info VALUES(${seed_id},'${seed_name}','${seed_type}','${seed_category}',${seed_rate},'${seed_quantity}','${company_name}');INSERT INTO maintain VALUES(${farmer_id},${pesticide_id},${fertilizer_id},(SELECT LAST_INSERT_ID()))`, (err, res) => {
       if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
       }
       console.log("farmers: ", res);
       result(null, res);
     });
   };
   Farmer.updateseed = (seed_id,seed_name,seed_rate,seed_quantity,seed_type,seed_category,company_name,pesticide_id,fertilizer_id,farmer_id, result) => {
     sql.query(`UPDATE Seeds_info SET Seed_name='${seed_name}',Seed_type='${seed_type}',Seed_category='${seed_category}',Seed_rate=${seed_rate},Seed_quantity='${seed_quantity}',Company_name='${company_name}' WHERE Seed_id=${seed_id}`, (err, res) => {
       if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
       }
       console.log("farmers: ", res);
       result(null, res);
     });
   };
   Farmer.deleteseed = (seed_id,result) => {
     sql.query(`DELETE FROM Seeds_info WHERE Seed_id=${seed_id}`, (err, res) => {
       if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
       }
       console.log("farmers: ", res);
       result(null, res);
     });
   };



   Farmer.profitloss = (f_id,crop_id,result) => {
    sql.query(`CALL expenses(${f_id},${crop_id}); select * from expenses where F_id=${f_id} AND Crop_id=${crop_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("farmers: ", res);
      result(null, res[1]);
    });
  };


  module.exports = Farmer;