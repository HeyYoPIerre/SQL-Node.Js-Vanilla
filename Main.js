const DataManager = require('./DataManager.js');
const Client = require('./Clients.js');
const LinesProduct = require('./LinesProducts.js');
const Product = require('./Products.js');
const Order = require('./Orders.js');
const readline = require('readline');
const mysql = require('mysql');

// Création des instances
dataManager = new DataManager('localhost', 'root', '', 'exo');
client = new Client();
linesProduct = new LinesProduct();
product = new Product;
order = new Order();

// Mise en place de readline 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


dataManager.connect();

function handleClientOperations() {
  console.log('Client Operations:');
  console.log('1. Create Client');
  console.log('2. Read Client');
  console.log('3. Update Client');
  console.log('4. Delete Client');
  console.log('5. Back to main menu');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter firstName: ', (param1) => {
          rl.question('Enter lastName: ', (param2) => {
            rl.question('Enter address: ', (param3) => {
              rl.question('Enter city: ', (param4) => {
                client.create(param1, param2, param3, param4);
                displayMenu();
              });
            });
          });
        });
        break;
      case '2':
        rl.question('Choose ID: ', (id) => {
          client.read(id);
          displayMenu();
        });
        break;
      case '3':
        rl.question('Enter firstName: ', (param1) => {
          rl.question('Enter lastName: ', (param2) => {
            rl.question('Enter address: ', (param3) => {
              rl.question('Enter city: ', (param4) => {
                rl.question('Enter id: ', (param5) => {
                  client.update(param1, param2, param3, param4, param5);
                  displayMenu();
                });
              });
            });
          });
        });
        break;
      case '4':
        rl.question('Choose ID: ', (id) => {
          client.delete(id);
          displayMenu();
        });
        break;
      case '5':
        displayMenu();
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
        handleClientOperations(); // Show the menu again
    }
  });
}

function handleLinesProductOperations() {
  console.log('LinesProduct Operations:');
  console.log('1. Create LinesProduct');
  console.log('2. Read LinesProduct');
  console.log('3. Update LinesProduct');
  console.log('4. Delete LinesProduct');
  console.log('5. Back to main menu');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter productReference: ', (param1) => {
          rl.question('Enter quantity: ', (param2) => {
            linesProduct.create(param1, param2);
            displayMenu();
          });
        });
        break;
      case '2':
        rl.question('Choose ID: ', (id) => {
          linesProduct.read(id);
          displayMenu();
        });
        break;
      case '3':
        rl.question('Enter productReference: ', (param1) => {
          rl.question('Enter quantity: ', (param2) => {
            rl.question('Enter id: ', (param3) => {
              linesProduct.update(param1, param2, param3);
              displayMenu();
            });
          });
        });
        break;
      case '4':
        rl.question('Choose ID: ', (id) => {
          linesProduct.delete(id);
          displayMenu();
        });
        break;
      case '5':
        displayMenu();
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
        handleLinesProductOperations(); // Show the menu again
    }
  });
}

function handleProductOperations() {
  console.log('Product Operations:');
  console.log('1. Create Product');
  console.log('2. Read Product');
  console.log('3. Update Product');
  console.log('4. Delete Product');
  console.log('5. Back to main menu');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter reference: ', (param1) => {
          rl.question('Enter designation: ', (param2) => {
            rl.question('Enter price: ', (param3) => {
              rl.question('Enter stock: ', (param4) => {
                product.create(param1, param2, param3, param4);
                displayMenu();
              });
            });
          });
        });
        break;
      case '2':
        rl.question('Choose reference: ', (reference) => {
          product.read(reference);
          displayMenu();
        });
        break;
      case '3':
        rl.question('Enter designation: ', (param1) => {
          rl.question('Enter price: ', (param2) => {
            rl.question('Enter stock: ', (param3) => {
              rl.question('Enter reference: ', (param4) => {
                product.update(param1, param2, param3, param4);
                displayMenu();
              });
            });
          });
        });
        break;
      case '4':
        rl.question('Choose reference: ', (reference) => {
          product.delete(reference);
          displayMenu();
        });
        break;
      case '5':
        displayMenu();
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
        handleProductOperations(); // Show the menu again
    }
  });
}

function handleOrdersOperations() {
  console.log('Order Operations:');
  console.log('1. Create Order');
  console.log('2. Read Order');
  console.log('3. Update Order');
  console.log('4. Delete Order');
  console.log('5. Back to main menu');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter id: ', (param1) => {
          rl.question('Enter date: ', (param2) => {
            rl.question('Enter clientId: ', (param3) => {
                order.create(param1, param2, param3);
                displayMenu();
              });
            });
          });
        break;
      case '2':
        rl.question('Choose ID: ', (id) => {
          order.read(id);
          displayMenu();
        });
        break;
      case '3':
        rl.question('Enter date: ', (param1) => {
          rl.question('Enter clientId: ', (param2) => {
            rl.question('Enter id: ', (param3) => {
                order.update(param1, param2, param3);
                displayMenu();
              });
            });
          });
        break;
      case '4':
        rl.question('Choose id: ', (id) => {
          product.delete(id);
          displayMenu();
        });
        break;
      case '5':
        displayMenu();
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
        handleOrdersOperations(); // Show the menu again
    }
  });
}




// Function to display the main menu
function displayMenu() {
  console.log('Main Menu:');
  console.log('1. Client');
  console.log('2. LinesProduct');
  console.log('3. Product');
  console.log('4. Order');
  console.log('5. Exit');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        handleClientOperations(); // Go to Client operations menu
        break;
      case '2':
        handleLinesProductOperations();
        break;
      case '3':
        handleProductOperations();
        break;
      case '4':
        handleOrdersOperations();        
        break;
      case '5':
        rl.close();
        return;
      default:
        console.log('Invalid choice. Please select a valid option.');
        displayMenu(); // Show the main menu again
    }
  });
}

// Start the CLI by displaying the main menu
displayMenu();

//pas mal hein