
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false );

xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);


----------------------------

he number of HTTP methods you'll use is quite small—there are just four HTTP "verbs" you'll need to know! They are:

GET: retrieves information from the specified source (you just saw this one!)
POST: sends new information to the specified source.
PUT: updates existing information of the specified source.
DELETE: removes existing information from the specified source.

in a succesful request you get a response, like 200, but there are more and here is a list:
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
