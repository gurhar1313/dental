var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const query = `use dentist;`
    con.query(query, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
    const query2 = `select * from appointment;`
    con.query(query2, function (err, result) {
      if (err) throw err;
     // console.log("Result: " + result[0].name);
      result.forEach(r=>{
          console.log(r);
      })
    });
  });
  
  