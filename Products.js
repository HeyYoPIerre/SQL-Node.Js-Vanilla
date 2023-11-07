const mysql = require ('mysql');

class Product {
    constructor (reference, designation, price, stock) {
        this.reference = reference;
        this.designation = designation;
        this.price = price;
        this.stock = stock;
    }
    // Fonction pour créer un nouvel enregistrement
create(reference, designation, price, stock) {
    const insertProductSQL = 'INSERT INTO products (reference, designation, price, stock) VALUES (?, ?, ?, ?)';
    dataManager.connection.query(insertProductSQL, [reference, designation, price, stock], (err, results) => {
        if (err) {
            console.error('Erreur lors de la création : ' + err.message);
        } else {
            console.log('Enregistrement créé avec succès. ID de l\'enregistrement : ' + results.insertId);
        }
    });
}

// Fonction pour lire un enregistrement

 read(reference) {
    const selectProductSQL = 'SELECT * FROM products WHERE reference = ?';
    dataManager.connection.query(selectProductSQL, [reference], (err, results) => {
        if (err) {
           console.error('Erreur lors de la lecture : ' + err.message);
        } else {
            console.log(results[0]);
        }
    });
}

// Fonction pour mettre à jour un enregistrement

 update(designation, price, stock, reference) {
    const updateProductSQL = 'UPDATE product SET designation = ?, price = ?, stock = ? WHERE reference = ?';
    dataManager.connection.query(updateProductSQL, [designation, price, stock, reference], (err) => {
        if (err) {
            console.error('Erreur lors de la mise à jour : ' + err.message);
        } else {
            console.log('Enregistrement mis à jour avec succès.');
        }
    });
}

// Fonction pour supprimer un enregistrement
 delete(reference) {
    const deleteProductSQL = 'DELETE FROM products WHERE reference = ?';
    dataManager.connection.query(deleteProductSQL, [reference], (err) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'enregistrement : ' + err.message);
      } else {
        console.log('Enregistrement supprimé avec succès.');
      }
    });
  }
}

module.exports = Product

