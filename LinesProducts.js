const mysql = require ('mysql');


class LinesProduct {
    constructor (orderId,productReference,quantity) {
        this.orderId = orderId;
        this.productReference = productReference;
        this.quantity = quantity;
    }
    
// Fonction pour créer un nouvel enregistrement
create(productReference, quantity) {
    const insertLinesProductSQL = 'INSERT INTO linesproducts (productReference, quantity) VALUES (?, ?)';
    dataManager.connection.query(insertLinesProductSQL, [productReference, quantity], (err, results) => {
        if (err) {
            console.error('Erreur lors de la création : ' + err.message);
        } else {
            console.log('Enregistrement créé avec succès. ID de l\'enregistrement : ' + results.insertId);
        }
    });
}

// Fonction pour lire un enregistrement

 read(id) {
    const selectLinesProductSQL = 'SELECT * FROM linesproduct WHERE id = ?';
    dataManager.connection.query(selectLinesProductSQL, [id], (err, results) => {
        if (err) {
           console.error('Erreur lors de la lecture : ' + err.message);
        } else {
            console.log(results[0]);
        }
    });
}

// Fonction pour mettre à jour un enregistrement

 update(productReference, quantity, id) {
    const updateLinesProductSQL = 'UPDATE linesproduct SET productReference = ?, quantity = ? WHERE id = ?';
    dataManager.connection.query(updateLinesProductSQL, [productReference, quantity, id], (err) => {
        if (err) {
            console.error('Erreur lors de la mise à jour : ' + err.message);
        } else {
            console.log('Enregistrement mis à jour avec succès.');
        }
    });
}

// Fonction pour supprimer un enregistrement
 delete(id) {
    const deleteLinesProductSQL = 'DELETE FROM linesproduct WHERE id = ?';
    dataManager.connection.query(deleteLinesProductSQL, [id], (err) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'enregistrement : ' + err.message);
      } else {
        console.log('Enregistrement supprimé avec succès.');
      }
    });
  }
}
module.exports = LinesProduct
