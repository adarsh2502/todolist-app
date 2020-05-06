var mysql = require('mysql');
var add = require('date-fns/add');
var format = require('date-fns/format');

class Task {
    constructor() {
        this.title = "rec task 02";
        this.priority = 1;
        this.status = 1;
        this.startDate = '2020-05-06';
        this.dueDate = '2020-06-06';
        this.group = 1;
        this.cat = 1;
        this.recurring = false;
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

                for (var i = 0; i < newTask.times; i++) {
                    var sDate = new Date(newTask.startDate); 
                    var dDate = new Date(newTask.dueDate);
                    var recDates = [];
                    var sqlTsk = "INSERT INTO task (t_name, t_user, t_priority, t_status, t_description, t_start_date, t_due_date, t_rec_id, t_group, t_caregory, t_active) VALUES (?)";

                    if (i > 0) {

                        recDates = getRecDate(newTask.frequency, sDate, dDate, i);
                        sDate = recDates[0];
                        dDate = recDates[1];
                        
                    }

                    valueListTsk = [newTask.title, 1, newTask.priority, newTask.status, newTask.description, sDate, dDate, global.newId, newTask.group, newTask.cat, 1];

                    console.log(valueListTsk);
                    //run query to insert values into task table
                    con.query(sqlTsk, [valueListTsk], function (err, result) {
                        if (err) {
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


function getRecDate(freq, sdate, ddate, no) {
    var dateArr = [];

    switch (freq) {
        case "daily":
            sdate = add(sdate, {
                days: no,
            });
            ddate = add(ddate, {
                days: no,
            });
            break;
        case "weekly":
            sdate = add(sdate, {
                weeks: no,
            });
            ddate = add(ddate, {
                weeks: no,
            });
            break;
        case "monthly":
            sdate = add(sdate, {
                months: no,
            });
            ddate = add(ddate, {
                months: no,
            });
            break;
    }

    dateArr[0] = sdate;
    dateArr[1] = ddate;

    return dateArr;
}

