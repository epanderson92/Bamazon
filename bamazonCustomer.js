// Requier and conncetion
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
	host:"127.0.0.1",
	port: 3306,


// Your username
user:"root",

// Your password
password:"root",
database:"bamazon_db"
});

connection.connect(function(err){
if (err) throw err;

});

connection.query("SELECT * FROM products", function(err,res){
	if (err) throw err;
	for (var i = 0; i < res.length; i++){
		console.log(res[i].item_id + " | " + res[i].product_name + " | "
		 + res[i].deparment_name + " | " + res[i].price + " | " + res[i].stock_quantity);
	}

});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["Find songs by artist", "Find all artists who appear more than once",
      "Find data within a specific range", "Search for a specific song"]
  }).then(function(answer) {

    switch (answer.action) {
      case "Find songs by artist":
      	console.log(res[i].action);
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;
	}
  });
};

