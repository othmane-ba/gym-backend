const sql = require("../config/db.js");

const Offre = function(offre) {
  this.id = offre.id;
  this.nom = offre.nom;
  this.type = offre.type;
  this.description = offre.description;
};

// get all offres
Offre.getAllOffres = (result) => {
  let query = "SELECT * FROM offres";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// get by ID
Offre.getByID = (id, result) => {
  let query = "SELECT * FROM offres WHERE id='"+id+"'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// count all offres
Offre.count = (result) => {
  let query = "SELECT count(*) AS count FROM offres";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// create offre
Offre.create = (newOffre, result) => {
  sql.query("INSERT INTO offres SET ?", newOffre, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Offre created succesfully !", { id: res.insertId, ...newOffre });
    result(null, { id: res.insertId, ...newOffre });
  });
};

// update offre
Offre.update = (id, offre, result) => {
  sql.query(
    `UPDATE offres
     SET id=?, nom=?, type=?, description=?
     WHERE id=?`,
    [offre.id, offre.nom, offre.type, offre.description, id],
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

      console.log("Offre with id " + id + " updated succesfully !", { id: id, ...offre });
      result(null, { id: id, ...offre });
    }
  );
};

// delete offre
Offre.delete = (id, result) => {
  sql.query("DELETE FROM offres WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Offre with id " + id + " deleted succesfully !");
    result(null, res);
  });
};

module.exports = Offre;