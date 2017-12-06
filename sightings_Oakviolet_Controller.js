module.exports = function(app, db, jsonParser){

    var fields = ["NAME", "PERSON", "LOCATION", "SIGHTED"];

    app.get('/api/sightings/Oakviolet', function(req, res){
        db.all("SELECT " + fields.join(", ") + " FROM SIGHTINGS WHERE NAME = 'Oak violet' ORDER BY SIGHTED DESC LIMIT 10;", function(err, rows) {
            res.json(rows);
        });
    });
}