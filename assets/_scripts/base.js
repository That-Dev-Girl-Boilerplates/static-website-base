var base = {
  message: 'Hello World!',

  print: function() {
    console.log(this.message);
  }
}

$(document).ready(function() {
  base.print();
});
