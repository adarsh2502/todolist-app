var mysql = require('mysql');

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "finishit_db",
    
}
);
//function listValues(){
// var c = "2020-04-28 00:00:00";

// var sql ='select * from task where t_due_date = ' + mysql.escape(c); 
// con.query(sql, function (err, result){
//     if(err)
//     {
//         return console.log(err);
//     }
//     return console.log(result);
// });
