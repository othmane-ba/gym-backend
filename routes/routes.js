module.exports = app => {
    const client = require("../controllers/clientController.js");
    const reservation = require("../controllers/reservationController.js");
    const seance = require("../controllers/seanceController.js");
    const offre = require("../controllers/offreController.js");

    var router = require("express").Router();

    /**** LOG GIN ****/
    router.get("/clients/login/:email/:password", client.logIn);

    /***** CLIENTS *****/
    // Get all clients
    router.get("/clients/all", client.findAll);

    // Get client by ID
    router.get("/clients/id/:id", client.findByID);
    
    // Get next seance by Client ID
    router.get("/clients/:id/nextSeance", client.findNextSeanceByID);

    // Get number of clients
    router.get("/clients/count", client.count);

    // Create a client user
    router.post("/clients/add", client.create);

    // Update a client by ID
    router.put("/clients/update/:id", client.update);

    // Update client ID
    router.put("/clients/updateCIN/:id/:cin", client.updateCIN);

    // Update client nom
    router.put("/clients/updateNom/:id/:nom", client.updateNom);

    // Update client prenom
    router.put("/clients/updatePrenom/:id/:prenom", client.updatePrenom);

    // Update client email
    router.put("/clients/updateEmail/:id/:email", client.updateEmail);

    // Update client genre
    router.put("/clients/updateGenre/:id/:genre", client.updateGenre);

    // Update client password
    router.put("/clients/updatePassword/:id/:password", client.updatePassword);

    // Update client adresse
    router.put("/clients/updateAdresse/:id/:adresse", client.updateAdresse);

    // Delete a client by ID
    router.delete("/clients/delete/:id", client.delete);

    /***** RESERVATIONS *****/
    // Get all reservations
    router.get("/reservations/all", reservation.findAll);

    // Get reservation by client ID
    router.get("/reservations/client/:id", reservation.findByClientID);
    
    // Get reservation by clients
    router.get("/reservations/clients", reservation.findByClientID);

    // Get number of reservations
    router.get("/reservations/count", reservation.count);

    // Create a reservation
    router.post("/reservations/add", reservation.create);

    // Update a reservation by ID
    router.put("/reservations/update/:id", reservation.update);

    // Delete a reservation by ID
    router.delete("/reservations/delete/:id", reservation.delete);

    /***** SEANCES *****/
    // Get all seances
    router.get("/seances/all", seance.findAll);

    // Get seance by date
    router.get("/seances/date/:date", seance.findByDate);
    
    // Get number of seances
    router.get("/seances/count", seance.count);

    // Get earliest seance
    router.get("/seances/earliest/:date", seance.earliestDate);

    // Create a seance
    router.post("/seances/add", seance.create);

    // Update a seance by ID
    router.put("/seances/update/:id", seance.update);

    // Delete a seance by ID
    router.delete("/seances/delete/:id", seance.delete);

    /***** OFFRES *****/
    // Get all offres
    router.get("/offres/all", offre.findAll);

    // Get offre by ID
    router.get("/offres/id/:id", offre.findByID);

    // Get number of offres
    router.get("/offres/count", offre.count);

    // Update offre
    router.post("/offres/add", offre.create);

    // Update offre by ID
    router.put("/offres/update/:id", offre.update);

    // Delete a offre by ID
    router.delete("/offres/delete/:id", offre.delete);

    app.use('/', router);
};