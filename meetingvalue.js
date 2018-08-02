var str_counter_0 = 0;
var display_str = "";
var display_div = document.getElementById("display_div_id");
var interval;

function incrementCount(current_count){
  interval = setInterval(timer,1000);
}

function timer(){
  var people = document.getElementById("attendees").value;
  var rate = document.getElementById("dayRate").value;
  while (display_div.hasChildNodes()) {
      display_div.removeChild(display_div.lastChild);
  }
  str_counter_0++;
  display_str ="£"+((people*(rate/(7.5*60*60))) *str_counter_0).toFixed(2).toString();
  for (var i = 0; i < display_str.length; i++) {
    var new_span = document.createElement('span');
    new_span.className = 'num_tiles';
    new_span.innerText = display_str[i];
    display_div.appendChild(new_span);
  }
}

function pause(){
  clearInterval(interval);
}
