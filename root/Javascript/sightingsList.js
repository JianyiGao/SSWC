function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var curName = getParameterByName('comname');

console.log(curName);

var req = {
  "name" : curName
};

console.log(JSON.stringify(req));

$.ajax({
  url: "/api/sightings",
  type: 'get',
  data: req,
  success: function(data){
    console.log("Data: " + data);
  }
});

var ajaxForm = new ajaxProxy("/api/sightings?name=" + curName);

document.addEventListener("DOMContentLoaded", function(event) {
    ajaxForm.PopulateTable (jsonToTable, handleError);
});

function handleError (data) {
    $("#ajax-error-box").modal('show');
    $("#ajax-error").text("Errorcode:" + data.status + ", Message:" + data.statusText);
    console.log(data);
}

function jsonToTable (data) {

    // Clear table
    $('#sightingTable tr').slice(1).remove();

    //if no tbody just select your table
    var tbody = $('#sightingTable').children('tbody');
    var table = tbody.length ? tbody : $('#sightingTable');

    var tableString = "";

    for(var i in data) {
        var sighting = data[i];

        tableString += "<tr><td>" + sighting.NAME
                    + "</td><td>" + sighting.PERSON
                    + "</td><td>" + sighting.LOCATION
                    + "</td><td>" + sighting.SIGHTED
                    + "</td></tr>";
    }

    table.append(tableString);
}


// Form event handlers
$('#refresh').click(function(){
    $("#ajax-error-box").hide();
    ajaxForm.PopulateTable (jsonToTable, handleError);
});
