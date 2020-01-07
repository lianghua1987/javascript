let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all[1];
val = document.all.length;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.baseURI;

val = document.characterSet;
val = document.contentType;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.forms[0].method;

val = document.forms[0].action;

val = document.links;


val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');


val = document.scripts;


console.log(val);

let scriptArrays = Array.from(val);
scriptArrays.forEach(function(s){
  console.log(s.getAttribute('src'));
});

