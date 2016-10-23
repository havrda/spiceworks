// Here's the initial data. Again: don't worry about persistence :)
Application = (function() {

  var cardFactory = new CardFactory();

  $('#employee-form').submit(function(event) {
    event.preventDefault();
    var name = $(this).find("input[name='name']").val();
    var url = $(this).find("input[name='photo_url']").val();
    cardFactory.addStar({name: name, photo_url: url});
    this.reset();
    $(this).find("button").blur();
    return true;
  });

});

$( document ).ready(function() {
  var app = new Application();
});