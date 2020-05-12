var mysql = require('mysql');


class List {   
    /**
     * Constructor for Task class
     * Note: during integration add values taken from the front-end as parameters to the constructor and replace them with the hardcoded values inside the constructor.
     * 
     */
    constructor() {
        this.title = "new list";

    }
}
var newList = new List();
global.newId;
var message = '';

//assign values to be inserted into task table
var valueList = [];

var con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "finishit_db"
});

valueList = [newList.title];
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected");
        var sqlTsk = "INSERT INTO Add_List (l_name) VALUES (?)";
        //console.log(valueListTsk);
        //run query to insert values into task table
        con.query(sqlTsk, [valueList], function (err, result) {
            if (err) {
                console.log("[mysql error]", err);
            }
            message = "New list has been added!";
            //console.log("Result: " + result);
            //Note: send message to front-end during integration
            console.log(message);

        });
    });
