module.exports = function(app, db, jsonParser){

    var fields = ["NAME", "PERSON", "LOCATION", "SIGHTED"];

    console.log("Registering endpoint: /api/sightings");
    app.get('/api/sightings', function(req, res){
        console.log("SELECT " + fields.join(", ") + " FROM SIGHTINGS");
        db.all("SELECT " + fields.join(", ") + " FROM SIGHTINGS", function(err, rows) {
            res.json(rows);
        });
    });
}
