module.exports = function(app, db, jsonParser){

  var fields = ['COMNAME', "GENUS", "SPECIES"];

  console.log("Registering endpoint: /api/flowers");
  app.use(jsonParser);
  app.get('/api/flowers', function(req, res){
    // console.log('SELECT' + fields.join("," + "FROM FLOWERS"));
    db.all("SELECT " + fields.join(", ") + " FROM FLOWERS", function(err, rows) {
        res.json(rows);
   });
  });

  app.post('/api/flowers', function(req, res){
    let parameters = req.body;

    console.log(parameters.colName + " " + parameters.update);

    db.run("UPDATE FLOWERS SET " + parameters.colName + " = '"
      + parameters.update + "' WHERE COMNAME = '" + parameters.comname
      + "'" , function(err){
      if(err){
        console.log(err);
        res.send(err);
      }
      res.send("Success");
    })
  })
}
