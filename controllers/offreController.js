const Offre = require("../models/offre.js");

exports.findAll = (req, res) => {
  Offre.getAllOffres((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.findByID = (req, res) => {
  Offre.getByID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.count = (req, res) => {
  Offre.count((err, data) => {
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

  const offre = new Offre({
    id: req.body.id,
    nom: req.body.nom,
    type: req.body.type,
    description: req.body.description
  });

  Offre.create(offre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the offre."
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

  Offre.update(req.params.id, new Offre(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Offre with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating offre with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Offre.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Offre with with ID: ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          message: `Error deleting offre with ID: ${req.params.id}`
        });
      }
    } else res.send({ message: `Offre was deleted successfully!` });
  });
};