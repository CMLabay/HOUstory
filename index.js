'use strict';

let loggedIn = { status: false};

function handleButton(){
  $(".login").on('click', '.login-btn',function(event){
      loggedIn.status = true;
      localStorage.setItem("status", loggedIn.status);
  });
}

$(document).ready(handleButton());
