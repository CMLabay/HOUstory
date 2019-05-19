function move() {
  for(let width = 1; width <= 225; width++){
    setTimeout(function() {
      if(width <= 225){
        $('.progress-left-off').attr('aria-valuenow', width).css('width', width);
      }
    }, 750);
    }

    for(let width = 1; width <= 50; width++){
      setTimeout(function() {
        if(width <= 50){
          $('.progress-visited').attr('aria-valuenow', width).css('width', width);
        }
      }, 750);
  }
}
$(document).ready(move());
