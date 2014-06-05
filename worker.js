function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var n = 1;
search: while (true) {
  n += 1;
  for (var i = 2; i <= Math.sqrt(n); i += 1)
    sleep(1000);
    if (n % i === 0)
    continue search;
  // found a prime!
  postMessage(n);
}


var n = 1;
search: while (true) {
  n += 1;
  for (i = 0; i <10; i++)
    $('#entered').append(n);
    rand_array = [ ];
    rand_numbers = (Math.rand(n)) * n;
    rand_array << rand_numbers;
    $('#random').append(rand_array);
    // rand_array_sum = rand_array;


    // $('#average').append();
    if (n % i === 0)
    continue search;
  // found a prime!
  postMessage(n);
}
