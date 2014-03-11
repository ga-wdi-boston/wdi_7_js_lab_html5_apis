self.addEventListener('message', function(event) {
  var average = self.getNumbers(parseInt(event.data));
  self.postMessage(average);
});

self.getNumbers = function(number) {
  var sum = 0;
  for (var i=1; i <= number; i++) {
    sum += Math.random() * 100
    if (i % 100000 === 0) {
      self.postMessage('');
    }
  }
  return sum / number;
}
