const example = {
  message: 'Hello world!',

  print: function() {
    console.log(this.message);
  }
}

$(document).ready(function() {
  example.print();
});
