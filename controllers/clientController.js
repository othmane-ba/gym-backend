const Client = require("../models/client.js");

exports.findAll = (req, res) => {
  Client.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.logIn = (req, res) => {
  Client.logIn(req.params.email, req.params.password, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.findByID = (req, res) => {
  Client.getByID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.findNextSeanceByID = (req, res) => {
  Client.getNextSeanceByID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.count = (req, res) => {
  Client.count((err, data) => {
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

  const client = new Client({
    id: req.body.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    genre: req.body.genre,
    mdp: req.body.mdp,
    numero_tel: req.body.numero_tel,
    adresse: req.body.adresse,
    ville: req.body.ville,
    sms_enabled: req.body.sms_enabled,
    newsletter_enabled: req.body.newsletter_enabled,
    credits: req.body.credits,
    role: req.body.role
  });

  Client.create(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the client."
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

  Client.update(req.params.id, new Client(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updateCIN = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updateCIN(req.params.id, req.params.cin, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updateNom = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updateNom(req.params.id, req.params.nom, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updatePrenom = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updatePrenom(req.params.id, req.params.prenom, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updatePassword = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updatePassword(req.params.id, req.params.password, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updateGenre = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updateGenre(req.params.id, req.params.genre, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updateEmail = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updateEmail(req.params.id, req.params.email, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updateTel = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updateTel(req.params.id, req.params.numero_tel, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.updateAdresse = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot be empty !"
    });
  }

  Client.updateAdresse(req.params.id, req.params.adresse, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Client with ID: ${req.params.id} not found.`
          });
        } else {
          res.status(500).send({
            message: `Error updating client with ID: ${req.params.id}`
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Client.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Client with with ID: ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          message: `Error deleting client with ID: ${req.params.id}`
        });
      }
    } else res.send({ message: `Client was deleted successfully!` });
  });
};