module.exports = function insert (colName, update){
  function (app, db, jsonParser){

  var fields = ['COMNAME', "GENUS", "SPECIES"];


  db.run('INSERT INTO FLOWERS(' + colName + ') VALUES (' + update + ')'), function(err){
    if (err) {
      return console.log(err.message);
    }
  }

  // app.get('/api/flowers', function(req, res){
  //   // console.log('SELECT' + fields.join("," + "FROM FLOWERS"));
  //   db.all("SELECT " + fields.join(", ") + " FROM FLOWERS", function(err, rows) {
  //       res.json(rows);
  //  });
  // });
  }
}
