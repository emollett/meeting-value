  var counter_list = [00,00000,00000];
  var str_counter_0 = counter_list[0];
  var str_counter_1 = counter_list[1];
  var str_counter_2 = counter_list[2];
  var display_str = "";
  var display_div = document.getElementById("display_div_id");

  function incrementCount(current_count){
    var people = document.getElementById("attendees").value;
    console.log(people);
    setInterval(function(){
      // clear count
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;

      display_str = "£" + ((people*(200/(7.5*60*60)).toFixed(5)) *str_counter_0).toString();
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },1000);
  }
