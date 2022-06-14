const sql = require("../config/db.js");

const Reservation = function(reservation) {
  this.id = reservation.id;
  this.id_client = reservation.id_client;
  this.id_seance = reservation.id_seance;
};

// get all reservations
Reservation.getAll = (result) => {
  let query = "SELECT * FROM reservation";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Reservation.count = (result) => {
  let query = "SELECT count(*) AS count FROM reservation";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Reservation.getByID = (result, id) => {
  let query = "SELECT * FROM reservation";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Reservation.getByClientID = (result) => {
  let query = `SELECT reservation.id, id_client, id_seance, reservation.date AS reservation_date, nom, prenom, seance.date AS seance_date, machine
  FROM reservation, client, seance
  WHERE id_client=client.id AND id_seance=seance.id`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// create reservation
Reservation.create = (newReservation, result) => {
  sql.query("INSERT INTO reservation SET ?", newReservation, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Reservation created succesfully !", { id: res.insertId, ...newReservation });
    result(null, { id: res.insertId, ...newReservation });
  });
};

// update reservation
Reservation.update = (id, reservation, result) => {
  sql.query(
    `UPDATE reservation
     SET id_client=?, id_seance=?
     WHERE id=?`,
    [reservation.id_client, reservation.id_seance, id],
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

      console.log("Reservation with ID " + id + " updated succesfully !", { id: id, ...reservation });
      result(null, { id: id, ...reservation });
    }
  );
};

// delete reservation
Reservation.delete = (id, result) => {
  sql.query("DELETE FROM reservation WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Reservation with id " + id + " deleted succesfully !");
    result(null, res);
  });
};

module.exports = Reservation;