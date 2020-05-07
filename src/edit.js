/**
 * This module takes task inputs from the user and edit relevant records in the task table
 * 
 * @author Shehan Thelis
 * @version 1.0
 */

var mysql = require('mysql');
var add = require('date-fns/add');
var format = require('date-fns/format');

class Task {
    /**
     * Constructor for Task class
     * Note: during integration add values taken from the front-end as parameters to the constructor and replace them with the hardcoded values inside the constructor.
     * 
     */
    constructor() {
        this.id = 68;
        this.title = "Testing update task";
        this.priority = 1;
        this.status = 1;
        this.startDate = '2020-05-06';
        this.dueDate = '2020-06-06';
        this.group = 1;
        this.cat = 1;
        this.recurring = true;
        this.times = 3;
        this.frequency = "weekly";
        this.description = "Updated";
    }

    displayTask() {
        console.log(this.title + " has a priority of " + this.priority);
    };
}


var newTask = new Task();
global.newId;

//assign values to be inserted into task table
var valueListTsk = [];
var message = '';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "finishit_db"
});


valueListTsk = [newTask.title, newTask.priority, newTask.status, newTask.description, newTask.startDate, newTask.dueDate, newTask.group, newTask.cat, newTask.id];

con.connect(function (err) {
    if (err) throw err;
    //console.log("Connected");
    var sqlTsk = "UPDATE task SET t_name = ? , t_priority = ? , t_status = ? , t_description = ? , t_start_date = ? , t_due_date = ? , t_group = ? , t_caregory = ? WHERE t_id = ?";
    //run query to insert values into task table
    con.query(sqlTsk, valueListTsk, function (err, result) {
        if (err) {
            console.log("[mysql error]", err);
            message = "An error occured while editing the task... Please try again.";
        }

        message = "Task updated successfully!"
        //console.log("Result: " + result);
        //Note: send message to front-end during integration
        console.log(message);
    });
});






