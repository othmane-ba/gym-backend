const sql = require("../config/db.js");

const Client = function(client) {
  this.id = client.id;
  this.nom = client.nom;
  this.prenom = client.prenom;
  this.genre = client.genre;
  this.email = client.email;
  this.mdp = client.mdp;
  this.numero_tel = client.numero_tel;
  this.adresse = client.adresse;
  this.ville = "Fès";
  this.sms_enabled = false;
  this.newsletter_enabled = false;
  this.credits = 0;
  this.role = "CLIENT";
};

// LOG IN
Client.logIn = (email, password, result) => {
  let query = "SELECT * FROM client WHERE role='CLIENT' AND email='"+ email +"' AND mdp='"+ password+ "'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Client.getNextSeanceByID = (id, result) => {
  let query = `
  SELECT MIN(seance.date) AS date
  FROM reservation, seance, client
  WHERE id_client='` + id + `' AND id_seance=seance.id AND id_client=client.id`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// get all clients
Client.getAll = (result) => {
  let query = "SELECT * FROM client WHERE role='CLIENT'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Client.count = (result) => {
  let query = "SELECT count(*) AS count FROM client WHERE role='CLIENT'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

Client.getByID = (id, result) => {
  let query = "SELECT * FROM client WHERE id='"+id+"'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// create client
Client.create = (newClient, result) => {
  sql.query("INSERT INTO client SET ?", newClient, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Client created succesfully !", { id: res.insertId, ...newClient });
    result(null, { id: res.insertId, ...newClient });
  });
};

// update client
Client.update = (id, client, result) => {
  sql.query(
    `UPDATE client
     SET id=?, nom=?, prenom=?, email=?, mdp=?, numero_tel=?, adresse=?, ville=?, sms_enabled=?, newsletter_enabled=?, credits=?
     WHERE id=?`,
    [client.id, client.nom, client.prenom, client.email, client.mdp, client.numero_tel, client.adresse, client.ville, client.sms_enabled, client.sms_enabled, client.credits, id],
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

      console.log("Client with id " + id + " updated succesfully !", { id: id, ...client });
      result(null, { id: id, ...client });
    }
  );
};

// update cin
Client.updateCIN = (id, cin, result) => {
  sql.query(
    `UPDATE client
     SET id=?
     WHERE id=?`,
    [cin, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update numero_tel
Client.updateTel = (id, numero_tel, result) => {
  sql.query(
    `UPDATE client
     SET numero_tel=?
     WHERE id=?`,
    [numero_tel, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update email
Client.updateEmail = (id, email, result) => {
  sql.query(
    `UPDATE client
     SET email=?
     WHERE id=?`,
    [email, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update nom
Client.updateNom = (id, nom, result) => {
  sql.query(
    `UPDATE client
     SET nom=?
     WHERE id=?`,
    [nom, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update prenom
Client.updatePrenom = (id, prenom, result) => {
  sql.query(
    `UPDATE client
     SET prenom=?
     WHERE id=?`,
    [prenom, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update adresse
Client.updateAdresse = (id, adresse, result) => {
  sql.query(
    `UPDATE client
     SET adresse=?
     WHERE id=?`,
    [adresse, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update genre
Client.updateGenre = (id, genre, result) => {
  sql.query(
    `UPDATE client
     SET genre=?
     WHERE id=?`,
    [genre, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// update password
Client.updatePassword = (id, password, result) => {
  sql.query(
    `UPDATE client
     SET mdp=?
     WHERE id=?`,
    [password, id],
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

      console.log("Client with id " + id + " updated succesfully !");
      result(null);
    }
  );
};

// delete client
Client.delete = (id, result) => {
  sql.query("DELETE FROM client WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Client with id " + id + " deleted succesfully !");
    result(null, res);
  });
};

module.exports = Client;