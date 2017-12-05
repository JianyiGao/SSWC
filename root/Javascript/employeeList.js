var ajaxForm = new ajaxProxy("/api/sightings")

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
