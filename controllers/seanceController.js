const Seance = require("../models/seance.js");

exports.findAll = (req, res) => {
  Seance.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    else res.send(data);
  });
};

exports.earliestDate = (req, res) => {
  Seance.earliestDate(req.params.date, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    else res.send(data);
  });
};

exports.findByDate = (req, res) => {
  Seance.getByDate(req.params.date, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.count = (req, res) => {
  Seance.count((err, data) => {
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

  const seance = new Seance({
    id: req.body.id,
    date: req.body.date,
    nombre_places: req.body.nombre_places,
    machine: req.body.machine,
    booked: req.body.booked
  });

  Seance.create(seance, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the seance."
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

  Seance.update(req.params.id, new Seance(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Seance with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating seance with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Seance.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Seance with with ID: ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          message: `Error deleting seance with ID: ${req.params.id}`
        });
      }
    } else res.send({ message: `Seance was deleted successfully!` });
  });
};