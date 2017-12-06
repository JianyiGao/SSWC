var ajaxForm = new ajaxProxy("/api/flowers");

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
    $('#flowersTable tr').slice(1).remove();

    //if no tbody just select your table
    var tbody = $('#flowersTable').children('tbody');
    var table = tbody.length ? tbody : $('#flowersTable');

    var tableString = "";

    for(var i in data) {
        var flowers = data[i];

        let tmpId= flowers.COMNAME.replace(/ /g,'');

        tableString += "<tr><td>" + flowers.COMNAME + "</td>"
                    + "<td><a href = 'views/sightings.html?comname="+tmpId+"'><button class = 'btn btn-default'> Find Sightings</button></a></td>"
                    + "</tr>";
    }

    table.append(tableString);
}


// Form event handlers
$('#refresh').click(function(){
    $("#ajax-error-box").hide();
    ajaxForm.PopulateTable (jsonToTable, handleError);
});
