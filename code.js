console.log("hello 7");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false );
// xhr.open("GET", "https://www.amazon.com/", false );

xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
