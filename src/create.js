var mysql = require('mysql');

class Task {
    constructor() {
        this.title = "rec task 02";
        this.priority = 1;
        this.status = 1;
        this.startDate = '2020-02-04';
        this.dueDate = '2020-04-01';
        this.group = 1;
        this.cat = 1;
        this.recurring = true;
        this.times = 3;
        this.frequency = "weekly";
        this.description = "This is rec test task 2";
    }

    displayTask() {
        console.log(this.title + " has a priority of " + this.priority);
    };
}


var newTask = new Task();
global.newId;

//assign values to be inserted into task table
var valueListTsk = [];

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "finishit_db"
});

if (newTask.recurring) {

    var valueListCrt = [newTask.recurring, newTask.frequency, newTask.times, newTask.startDate];
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected");
        var sqlCrt = "INSERT INTO task_creation (tc_recurring, tc_frequency, tc_times, tc_start_date) VALUES (?)";

        console.log(valueListCrt);
        //run query to insert values into task table
        con.query(sqlCrt, [valueListCrt], function (err, result) {
            if (err) {
                console.log("[mysql error]", err);
            } else {
                global.newId = result.insertId;

                console.log("Result: " + result);

                valueListTsk = [newTask.title, 1, newTask.priority, newTask.status, newTask.description, newTask.startDate, newTask.dueDate, global.newId, newTask.group, newTask.cat, 1];

                for (var i = 0; i < newTask.times; i++) {
                    var sqlTsk = "INSERT INTO task (t_name, t_user, t_priority, t_status, t_description, t_start_date, t_due_date, t_rec_id, t_group, t_caregory, t_active) VALUES (?)";
                    console.log(valueListTsk);
                    //run query to insert values into task table
                    con.query(sqlTsk, [valueListTsk], function (err, result) {
                        if (err){
                            console.log("[mysql error]", err);
                        }                        
                        console.log("Result: " + result);

                    });
                }

            }

        });
    });
}
else {
    valueListTsk = [newTask.title, 1, newTask.priority, newTask.status, newTask.description, newTask.startDate, newTask.dueDate, null, newTask.group, newTask.cat, 1];

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected");
        var sqlTsk = "INSERT INTO task (t_name, t_user, t_priority, t_status, t_description, t_start_date, t_due_date, t_rec_id, t_group, t_caregory, t_active) VALUES (?)";
        console.log(valueListTsk);
        //run query to insert values into task table
        con.query(sqlTsk, [valueListTsk], function (err, result) {
            console.log("[mysql error]", err);
            console.log("Result: " + result);
        });
    });
}

