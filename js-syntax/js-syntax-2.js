"use strict";

//ALL SEPARATE SCRIPTS ARE SEPARATED BY "================"
//Suppose we have an element on the html page using this JS file.

var btn = document.getElementById('#submit-btn');
var divToFill = document.getElementById('#div-to-fill');

btn.addEventListener('onclick' function() {
  divToFill.innerHTML = 'This is a test';
});

//=======================================================

