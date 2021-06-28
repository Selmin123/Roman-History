var h1 = document.getElementsByTagName("h1")[0];
var att = document.createAttribute("data-test");
att.value = "experiment";
h1.setAttributeNode(att);

var x = document.getElementsByTagName("h1")[0].getAttribute("data-test");
console.log(x);
/*var x = document.getElementsByTagName("H1")[0].getAttribute("class");
console.log(x);*/