// This JavaScript file uses AJAX to send XHR to the Duke Social API. 


var login = '2692911de0e542e9e45e80682dce4e9f';

var xhr = new XHLHttpRequest();

var method = "GET";
var url = "https://streamer.oit.duke.edu/ldap/people?q=";
xhr.open(method, url+"&login="+login, true);

//Function to run when response is received
xhr.onload = function() {
    var text = JSON.parse(xhr.responseText);
}

