const Reservation = require("../models/reservation.js");

exports.findAll = (req, res) => {
  Reservation.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reservations."
      });
    else res.send(data);
  });
};

exports.count = (req, res) => {
  Reservation.count((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.findByID = (req, res) => {
  Reservation.getByID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.findByClientID = (req, res) => {
  Reservation.getByClientID((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const reservation = new Reservation({
    id: req.body.id,
    id_client: req.body.id_client,
    id_seance: req.body.id_seance
  });

  Reservation.create(reservation, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reservation."
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Reservation.update(req.params.id, new Reservation(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Reservation with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating reservation with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Reservation.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Reservation with with ID: ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          message: `Error deleting reservation with ID: ${req.params.id}`
        });
      }
    } else res.send({ message: `Reservation was deleted successfully!` });
  });
};