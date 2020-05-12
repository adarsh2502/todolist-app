/**
 * This function takes user inputs and insert records to the task table
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
        this.title = "rec task 02";
        this.priority = 1;
        this.status = 1;
        this.startDate = '2020-05-06';
        this.dueDate = '2020-05-20';
        this.group = 1;
        this.cat = 1;
        this.recurring = true;
        this.times = 5;
        this.frequency = "fortnightly";
        this.description = "This is rec test task 3";
    }

    displayTask() {
        console.log(this.title + " has a priority of " + this.priority);
    };
}

//put arguments inside the parenthesis
var newTask = new Task();
global.newId;
var message = 'creating';

//assign values to be inserted into task table
var valueListTsk = [];

var con = mysql.createConnection({
    host: "localhost",
    user: "darachi",
    password: "password",
    database: "finishit_db"
});

if (newTask.recurring) {

    var valueListCrt = [newTask.recurring, newTask.frequency, newTask.times, newTask.startDate];
    con.connect(function (err) {
        if (err) throw err;
        //console.log("Connected");
        var sqlCrt = "INSERT INTO task_creation (tc_recurring, tc_frequency, tc_times, tc_start_date) VALUES (?)";

        //console.log(valueListCrt);
        //run query to insert values into task table
        con.query(sqlCrt, [valueListCrt], function (err, result) {
            if (err) {
                console.log("[mysql error]", err);
            } else {
                global.newId = result.insertId;

                //console.log("Result: " + result);

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

                    //console.log(valueListTsk);
                    //run query to insert values into task table
                    con.query(sqlTsk, [valueListTsk], function (err, result) {
                        if (err) {
                            console.log("[mysql error]", err);
                        }
                        message = "New task has been added!";
                        //console.log("Result: " + result);
                        //Note: send message to front-end during integration
                        console.log(message);

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
        //console.log("Connected");
        var sqlTsk = "INSERT INTO task (t_name, t_user, t_priority, t_status, t_description, t_start_date, t_due_date, t_rec_id, t_group, t_caregory, t_active) VALUES (?)";
        //console.log(valueListTsk);
        //run query to insert values into task table
        con.query(sqlTsk, [valueListTsk], function (err, result) {
            if (err) {
                console.log("[mysql error]", err);
            }
            message = "New task has been added!";
            //console.log("Result: " + result);
            //Note: send message to front-end during integration
            console.log(message);

        });
    });
}

/**
 * 
 * @param {*} freq 
 * @param {*} sdate 
 * @param {*} ddate 
 * @param {*} no 
 */
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
        case "fortnightly":
            sdate = add(sdate, {
                weeks: (no * 2),
            });
            ddate = add(ddate, {
                weeks: (no * 2),
            });
            break;
    }

    dateArr[0] = sdate;
    dateArr[1] = ddate;

    return dateArr;
}

