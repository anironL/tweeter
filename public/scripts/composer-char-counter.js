//Test JS
$(document).ready(function() {
  console.log("composer-char-counter loaded");

  $("#tweet-text").on('change keyup', function() {
    const maxLength = 140; 
    let x = $(this).val().length;

    $("#char-count").text(140 - x)

    if (x > maxLength) {
      $(".error").show();
      $(this).parent().find("div").find(".counter").css('color', "red");
    } else {
      $(".error").hide();
      $(".error-messages").hide();
      $(this).parent().find("div").find(".counter").css('color', "black");
    }
  });
});