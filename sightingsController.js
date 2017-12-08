module.exports = function(app, db, jsonParser){

    var fields = ["NAME", "PERSON", "LOCATION", "SIGHTED"];

    app.use(jsonParser);

    app.get('/api/sightings', function(req, res){
      let parameters = req.query;

      console.log("In get sightings " + parameters.name);

      // db.all("SELECT " + fields.join(", ") + " FROM SIGHTINGS WHERE NAME = 'Alpine columbine' ORDER BY SIGHTED DESC LIMIT 10;", function(err, rows) {
      //     res.json(rows);
      // });

      // db.all('SELECT ' + fields.join(', ') + ' FROM SIGHTINGS WHERE NAME = "Califronia flannelbush" ORDER BY SIGHTED DESC LIMIT 10;', function(err, rows) {
      //     res.json(rows);
      // });

        db.all('SELECT ' + fields.join(", ") + ' FROM SIGHTINGS WHERE NAME = "'
              + parameters.name +  '" ORDER BY SIGHTED DESC LIMIT 10;',
              function(err, rows) {
                if (err){
                  return console.log(err.message)
                }
                  res.json(rows);
              });
    });

    app.post('/api/sightings', function(req, res){
      let parameters = req.body;

      console.log(parameters);

      db.run('INSERT INTO SIGHTINGS(NAME, PERSON, LOCATION, SIGHTED) VALUES ("'
              + parameters.comname + '", "' + parameters.person + '", "'
              + parameters.location + '", "' + parameters.sighted + '" );',
              function(err){
                if(err){
                  console.log(err);
                  res.send(err);
                }
                res.send("Success");
              });
    });
}
