function add(){
  var name = document.getElementById("comname").value;
  var person = document.getElementById("person").value;
  var location = document.getElementById("location").value;
  var sighted = document.getElementById("sighted").value;

  var req = {
    "comname" : name,
    "person" : person,
    "location": location,
    "sighted": sighted
  };

  // console.log(JSON.stringify(req));

  $.ajax({
    url: "/api/sightings",
    type: 'post',
    data: JSON.stringify(req),
    headers: {
      "Content-Type": "application/json"
    },
    dataType: "json",
    success: function(data){
      console.log("Data: " + data);
    }
  });
  console.log('Sighting info has been submited.');
}
