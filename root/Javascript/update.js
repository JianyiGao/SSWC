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

var div = document.getElementById("current");
  div.innerHTML = "Update info for " + curName;

function update(){
  var col = document.getElementById("column").value.toUpperCase();
  if (col != "COMNAME" && col != "GENUS" && col != "SPECIES"){
    alert("Column name does not exist, please enter a correct column name.");
    return;
  }

  var info = document.getElementById("info").value;
  var req = {
    "colName": col,
    "update": info,
    "comname": curName
  };

console.log(JSON.stringify(req));
$.ajax({
  url: "/api/flowers",
  type: 'post',
  data: JSON.stringify(req),
  headers: {
    "Content-Type": "application/json"
  },
  dataType: "jsonp",
  success: function(data){
    console.log("Data: " + data);
    window.location.href = "../index.html";
  },
  error: function(err){
    console.log("error: " + err);
    window.location.href = "../index.html";
  }
});



}
