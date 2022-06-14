const sql = require("../config/db.js");

const Seance = function(seance) {
  this.id = seance.id;
  this.date = seance.date;
  this.nombre_places = seance.nombre_places;
  this.machine = seance.machine;
  this.booked = seance.booked;
};

// get all reservations
Seance.getAll = (result) => {
  let query = "SELECT * FROM seance";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Seance.getByDate = (date, result) => {
  let query = "SELECT * FROM seance WHERE date LIKE '" + date + "%'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Seance.earliestDate = (date, result) => {
  let query = "SELECT * FROM `seance` WHERE date>'"+ date +"' LIMIT 1";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Seance.count = (result) => {
  let query = "SELECT count(*) AS count FROM seance";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// create seance
Seance.create = (newSeance, result) => {
  sql.query("INSERT INTO seance SET ?", newSeance, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Seance created succesfully !", { id: res.insertId, ...newSeance });
    result(null, { id: res.insertId, ...newSeance });
  });
};

// update seance
Seance.update = (id, seance, result) => {
  sql.query(
    `UPDATE seance
     SET date=?, nombre_places=?, machine=?, booked=?
     WHERE id=?`,
    [seance.date, seance.nombre_places, seance.machine, seance.booked, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Seance with ID " + id + " updated succesfully !", { id: id, ...seance });
      result(null, { id: id, ...seance });
    }
  );
};

// delete seance
Seance.delete = (id, result) => {
  sql.query("DELETE FROM seance WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Seance with id " + id + " deleted succesfully !");
    result(null, res);
  });
};

module.exports = Seance;