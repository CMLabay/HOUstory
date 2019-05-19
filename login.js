'use strict';

let status = localStorage.getItem("status");

function handleNav(){
  $(".home").on('click', '#home-a',function(event){
    if(status === false){
      $('#home-a').attr('href', './index.html');
      console.log(status);
    } else {
      $('#home-a').attr('href', './experience.html');
      console.log(status);
    };
  });
}

$(document).ready(handleNav());
