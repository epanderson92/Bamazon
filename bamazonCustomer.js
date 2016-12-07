// Requier and conncetion
var mysql = require("mysql");
var inquirer = require('inquirer');


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

  
inquirer.prompt(["What item would you like?"]).then(function (answers) {
    console.log("cool"); 
});

