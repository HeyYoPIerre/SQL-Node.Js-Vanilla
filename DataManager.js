const mysql = require('mysql');

class DataManager {
    // Constructeur qui prend les paramètres de la connexion
    // Prend en paramètre tous les champs pour la future chaîne de connexion
    constructor(host, login, password, databaseName) {
        this.host = host;
        this.login = login;
        this.password = password;
        this.databaseName = databaseName;
        // La connexion
        this.connection = null;
    }

    // La méthode pour se connecter
    connect() {
        try {
            this.connection = mysql.createConnection({ host: this.host, user: this.login, password: this.password, database: this.databaseName });
            try {
                this.connection.connect((err) => {
                    if (err) {
                        console.error('Problème de connexion avec la base MySQL :', err);
                        console.error(err.message);
                        return;
                    }
                });
            }
            catch (err) {
                console.log("Échec de connexion à la base de données.");
            }
        }
        catch (err) {
            console.log("Échec de connexion à la base de données.");
        }
    }


// La méthode pour se déconnecter
disconnect() {
    this.connection.end((err) => {
        if (err) {
            console.error('Problème de déconnexion avec la base MySQL', err);
            return;
        }
        console.log('Déconnexion de la base !');
    });
}
}
module.exports = DataManager