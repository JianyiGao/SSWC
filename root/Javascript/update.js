import { insert } from '../../insert.js';

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
  var colName = document.getElementById("column").value.toUpperCase();
  var update = document.getElementById("info").value;



  console.log('Flower info has been updated.');
  }


}
