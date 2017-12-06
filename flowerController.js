module.exports = function(app, db, jsonParser){

  var fields = ['COMNAME', "GENUS", "SPECIES"];

  console.log("Registering endpoint: /api/flowers");

  app.get('/api/flowers', function(req, res){
    // console.log('SELECT' + fields.join("," + "FROM FLOWERS"));
    db.all("SELECT " + fields.join(", ") + " FROM FLOWERS", function(err, rows) {
        res.json(rows);
   });
  });
}
