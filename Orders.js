const mysql = require('mysql');


class Order {
    constructor (id,date,clientId) {
        this.id = id;
        this.date = date;
        this.clientId = clientId;
    }

// Fonction pour créer un nouvel enregistrement
create(id,date,clientId) {
    const insertOrderSQL = 'INSERT INTO orders (id, date, clientId) VALUES (?, ?, ?)';
    dataManager.connection.query(insertOrderSQL, [id,date,clientId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la création : ' + err.message);
        } else {
            console.log('Enregistrement créé avec succès. ID de l\'enregistrement : ' + results.insertId);
        }
    });
}

// Fonction pour lire un enregistrement

 read(id) {
    const selectOrderSQL = 'SELECT * FROM orders WHERE id = ?';
    dataManager.connection.query(selectOrderSQL, [id], (err, results) => {
        if (err) {
           console.error('Erreur lors de la lecture : ' + err.message);
        } else {
            console.log(results[0]);
        }
    });
}

// Fonction pour mettre à jour un enregistrement

 update(date,clientId, id) {
    const updateOrderSQL = 'UPDATE orders SET date = ?, clientId = ?  WHERE id = ?';
    dataManager.connection.query(updateOrderSQL, [date, clientId, id], (err) => {
        if (err) {
            console.error('Erreur lors de la mise à jour : ' + err.message);
        } else {
            console.log('Enregistrement mis à jour avec succès.');
        }
    });
}

// Fonction pour supprimer un enregistrement
 delete(id) {
    const deleteOrderSQL = 'DELETE FROM orders WHERE id = ?';
    dataManager.connection.query(deleteOrderSQL, [id], (err) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'enregistrement : ' + err.message);
      } else {
        console.log('Enregistrement supprimé avec succès.');
      }
    });
  }
}
module.exports = Order
