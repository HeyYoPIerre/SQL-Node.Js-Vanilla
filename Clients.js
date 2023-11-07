const mysql = require('mysql');


class Client {
    constructor(id, lastName, firstName, address, city) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.city = city;
    }


// Fonction pour créer un nouvel enregistrement
 create(firstName, lastName, address, city) {
    const insertClientSQL = 'INSERT INTO clients (firstName, lastName, address, city) VALUES (?, ?, ?, ?)';
    dataManager.connection.query(insertClientSQL, [firstName, lastName, address, city], (err, results) => {
        if (err) {
            console.error('Erreur lors de la création : ' + err.message);
        } else {
            console.log('Enregistrement créé avec succès. ID de l\'enregistrement : ' + results.insertId);
        }
    });
}

// Fonction pour lire un enregistrement

 read(id) {
    const selectClientSQL = 'SELECT * FROM clients WHERE id = ?';
    dataManager.connection.query(selectClientSQL, [id], (err, results) => {
        if (err) {
           console.error('Erreur lors de la lecture : ' + err.message);
        } else {
            console.log(results[0]);
        }
    });
}

// Fonction pour mettre à jour un enregistrement

 update(firstName, lastName, address, city, id) {
    const updateClienSQL = 'UPDATE clients SET firstName = ?, lastName = ?, address = ?, city = ? WHERE id = ?';
    dataManager.connection.query(updateClientSQL, [firstName, lastName, address, city, id], (err) => {
        if (err) {
            console.error('Erreur lors de la mise à jour : ' + err.message);
        } else {
            console.log('Enregistrement mis à jour avec succès.');
        }
    });
}

// Fonction pour supprimer un enregistrement
 delete(id) {
    const deleteClientSQL = 'DELETE FROM clients WHERE id = ?';
    dataManager.connection.query(deleteClientSQL, [id], (err) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'enregistrement : ' + err.message);
      } else {
        console.log('Enregistrement supprimé avec succès.');
      }
    });
  }
}
module.exports = Client